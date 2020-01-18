const app = getApp();
import diff from '../../libs/diff.js'
import parser from '../../libs/parser.js'
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
    Object.assign(this.data, this.lru.get(options.path || "/index"))
    console.log("onload common page", this.data)
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
        custom: app.globalData.Custom,
        customBar: app.globalData.CustomBar,
        statusBar: app.globalData.StatusBar,
        screenWidth: app.globalData.DiviceInfo.screenWidth,
        screenHeight: app.globalData.DiviceInfo.screenHeight,
      },
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
    ...context
  });
}