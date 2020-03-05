const app = getApp();
import diff from '../../libs/diff.js'
import parser from '../../libs/parser.js'
import net from '../../libs/net/net.js'
import render from '../../template/render/render.js'
const LRUMap = require('../../libs/lru/lru.js').LRUMap
const lru = new LRUMap()
const Mock = require('../../libs/net/mock.js').Mock
app.lru = lru

let originPage = Page

export default function(context = {}) {
  /**
   * merge 渲染层的功能到Page中
   */
  Object.assign(context, render, {
    net: net,
    lru: lru,
    diff: diff,
    parser: parser
  })
  /**
   * 页面加载函数重写
   */
  let originOnLoad = context.onLoad
  context.onLoad = function(options) {
    const self = this
    const mock = new Mock(self, "../../mock/")
    Object.assign(self, {
      mock: mock
    })
    self.app = app
    self.data.query = options.query
    self.data.path = options.path || "/index"
    self.data._id = this.parser.hash(self.data.path + self.data.query)
    try {
      self.data["_ctx"] = JSON.parse(options.ctx)
      self.data._eventId = self.data._ctx._id + ">" + self.data._id
    } catch (e) {
      self.data["_ctx"] = null
      self.data._eventId = ".>" + self.data._id
    }
    originOnLoad && originOnLoad.call(self, options)
  }
  /**
   * 触摸滑动事件后
   */
  let originonPageEvent = context.onPageEvent
  context.onPageEvent = function(e) {
    const self = this
    switch (e.direction) {
      case 'leftedge':
      case 'rightedge':
        wx.navigateBack({
          delta: -1
        })
        break
      case 'left':
      case 'right':
        app.event.emit('tabselect', e);
        break;
      default:
        wx.showToast({
          title: '滑动type:' + e.direction,
        })
        break
    }
    originonPageEvent && originonPageEvent.call(self, e)
  }

  /**
   * 页面滚动事件
   */
  let originonPageScroll = context.onPageScroll
  context.onPageScroll = function(e) {
    const self = this
    let scrollTop = e.scrollTop
    let pageStats = this.data.pageStats;
    pageStats.scrollTop = e.scrollTop
    if (scrollTop < pageStats.maxScrollTop) {
      pageStats.reachBottom = false
    } else {
      pageStats.reachBottom = true
    }
    if (pageStats.reachBottom) {
      pageStats.maxScrollTop = scrollTop
    }
    this.setData({
      pageStats
    })
    self.data.scrollTopArray[this.data.PageCur] = scrollTop;
    originonPageScroll && originonPageScroll.call(self, e)
  }

  /**
   * 页面触底事件
   */
  let originonReachBottom = context.onReachBottom
  context.onReachBottom = function() {
    const self = this
    let pageStats = this.data.pageStats;
    pageStats.reachBottom = true
    this.setData({
      pageStats
    })
    originonReachBottom && originonReachBottom.call(self)
  }
  context.getPage = function() {
    return this.data
  }
  return Page({
    data: Object.assign(context.data, {
      // authConfig: authConfig,
      pageStats: {
        maxScrollTop: 0,
        scrollTop: 0,
        reachBottom: false,
        Custom: app.globalData.Custom,
        CustomBar: app.globalData.CustomBar,
        StatusBar: app.globalData.StatusBar,
        ScreenWidth: app.globalData.DiviceInfo.screenWidth,
        ScreenHeight: app.globalData.DiviceInfo.screenHeight,
      },
      scrollTopArray: {},
      Custom: app.globalData.Custom,
      CustomBar: app.globalData.CustomBar,
      StatusBar: app.globalData.StatusBar,
      ScreenWidth: app.globalData.DiviceInfo.screenWidth,
      ScreenHeight: app.globalData.DiviceInfo.screenHeight,
    }),
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
      return {
        title: 'weapp browser',
        imageUrl: 'https://mp.weixin.qq.com/wxopen/basicprofile?action=get_headimg&token=491084062&t=1576763992863',
        path: '/pages/index/index'
      }
    },
    toTop(e) {
      let curTime = e.timeStamp;
      let lastTime = this.lastTapDiffTime;
      this.lastTapDiffTime = curTime;
      //两次点击间隔小于300ms, 认为是双击
      let diff = curTime - lastTime;
      if (diff < 300) {
        wx.pageScrollTo({
          scrollTop: 0
        })
      }
    },
    longPressNav(e) {
      var that = this
      var mode = ""
      if (1 == app.DEBUG) {
        mode = "网络请求模式"
      } else {
        mode = "demo模式"
      }
      wx.showModal({
        title: '切换模式',
        content: '将切换到' + mode,
        success: res => {
          app.DEBUG = (1 == app.DEBUG ? 0 : 1)
          wx.setStorage({
            key: 'debug',
            data: app.DEBUG,
          })
          that.lru.clear()
          wx.reLaunch({
            url: '/pages/index/index',
          })
        }
      })
    },
    NavChange(e) {
      var that = this
      var env = this.getEnv(e)
      that.data.path = env._href
      env._href = ""
      this.beforeClick(e)
      // 处理前一个页面的生命周期
      // this.getCurrComponent().onHide()
      // this.getCurrComponent().onUnload()
      var id = e.currentTarget.dataset.id
      var index = e.currentTarget.dataset.index
      var query = e.currentTarget.dataset.query
      this.data.query = query
      // this.net.request(that.data.path, query).then(res => {
      //   that.setData(res.data)
      // })
      that.request(that.data.path, query, null);
      this.setData({
        PageCur: e.currentTarget.dataset.cur,
        isNavChange: true,
        isShow: true
      })
      // 处理现在一个页面的生命周期
      // this.getCurrComponent().onLoad()
      // this.getCurrComponent().onShow()
      // this.getCurrComponent().onReady()
      // wx.pageScrollTo 会导致触发 onPageScroll，出现屏幕scrollTop被改
      wx.pageScrollTo({
        duration: 0,
        scrollTop: this.data.scrollTopArray[e.currentTarget.dataset.cur] || 0,
        complete() {
          that.data.isNavChange = false
        }
      })
    },
    request(path, query, body, forse) {
      if (app.DEBUG) {
        this.mock.get(path, query).then(res => {
          if (!res) {
            res = {
              nav: {
                icon1: 'back',
                text1: '返回'
              }
            }
          }
          this.setData(res)
        }).catch((e) => {
          this.setData({
            nav: {
              icon1: 'back',
              text1: '返回'
            }
          })
        });
        return
      }
      // 优先使用缓存
      var that = this
      var cache = !forse ? that.lru.get(path) : null
      if (cache) {
        cache && that.setData(cache)
        console.log(path, "use cache")
      } else {
        // 发起网络请求
        that.net.request(path, query, body).then(res => {
          res = res.data
          var parRes = that.parser.parse(res) || []
          // goto inner page
          var goto = parRes['_']['goto'] || {}
          if (Object.keys(goto).length > 0) {
            for (let key in goto) {
              that.net.request(goto[key]._data, null).then(r => {
                r = r.data
                var prop = that.parser.modify(key, goto[key]._route, r || {}, res)
                // 控制类型变量不继承上一页面page
                res.nav = res.nav || {}
                res.enablePullDownRefresh = res.enablePullDownRefresh || false
                res.enablePullUpRefresh = res.enablePullUpRefresh || false
                res.hideNavigation = res.hideNavigation || false
                // var originData = that.getPage()
                // var delta = diff(originData, res) || {}
                // // console.log(delta)
                that.lru.set(that.data.path, res)
                // if (0 != Object.keys(delta).length) {
                //   resolver(delta)
                // }
                if (!res) {
                  res = {
                    nav: {
                      icon1: 'back',
                      text1: '返回'
                    }
                  }
                }
                that.setData(res)
              }).catch(e => {
                console.log(e)
              })
            }
          } else {
            // 控制类型变量不继承上一页面page
            res.nav = res.nav || {}
            res.enablePullDownRefresh = res.enablePullDownRefresh || false
            res.enablePullUpRefresh = res.enablePullUpRefresh || false
            res.hideNavigation = res.hideNavigation || false
            // var originData = that.getPage()
            // var delta = diff(originData, res) || {}
            // // console.log(delta)
            that.lru.set(that.data.path, res)
            // if (0 != Object.keys(delta).length) {
            //   resolver(delta)
            // }
            if (!res || !res.list) {
              res = {
                nav: {
                  icon1: 'back',
                  text1: '返回'
                }
              }
            }
            that.setData(res)
          }
        }).catch((e) => {
          if (!cache) {
            that.setData({
              nav: {
                icon1: 'back',
                text1: '返回'
              }
            })
          }
        });
      }
    },
    ...context
  });
}