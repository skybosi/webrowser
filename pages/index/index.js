//index.js
import Page from '../../template/page/page';


//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {},
  /**
   * 洗牌算法
   */
  shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var path = options.path || "/index"
    var query = options.query
    this.data.path = path
    this.data.query = query
    this.mock.get(path, query).then(res => {
      this.setData(res)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 处理触屏事件函数
   */
  onPageEvent: function(e) {
    var that = this
    switch (e.direction) {
      case 'down':
      case 'up':
        var path = that.data.path
        var query = that.data.query
        this.mock.get(path, query).then(res => {
          this.setData(res)
          this.data.path = path
          this.data.query = query
        })
        break;
      default:
        break
    }
  },
  NavChange(e) {
    this.beforeClick(e)
    // 处理前一个页面的生命周期
    // this.getCurrComponent().onHide()
    // this.getCurrComponent().onUnload()
    this.setData({
      PageCur: e.currentTarget.dataset.cur,
      PageIdx: e.currentTarget.dataset.index,
      isNavChange: true,
      isShow: true
    })
    var index = e.currentTarget.dataset.index
    var path = e.currentTarget.dataset.path || e.target.dataset.path
    var id = e.currentTarget.dataset.id
    var query = e.currentTarget.dataset.query
    this.data.path = path
    this.data.query = query
    var PageIdx = this.data.PageIdx
    this.mock.get(path, query).then(res => {
      this.setData(res)
    })
    // // 注册消息回调
    // app.Messager.addWatcher(this.onMessage, this.data.PageCur, this)
    // // 处理现在一个页面的生命周期
    // this.getCurrComponent().onLoad()
    // this.getCurrComponent().onShow()
    // this.getCurrComponent().onReady()
    // console.log("NavChange: " + this.data.scrollTopArray[e.currentTarget.dataset.cur])
    // 还原子页面的滚动位置
    // var that = this
    // this.onPageScroll({
    //   scrollTop: this.data.scrollTopArray[e.currentTarget.dataset.cur]
    // })
    // wx.pageScrollTo 会导致触发 onPageScroll，出现屏幕scrollTop被改
    // wx.pageScrollTo({
    //   duration: 0,
    //   scrollTop: this.data.scrollTopArray[e.currentTarget.dataset.cur],
    //   complete() {
    //     that.data.isNavChange = false
    //   }
    // })
  }
})