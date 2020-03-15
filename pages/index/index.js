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
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    var path = (options.path && decodeURIComponent(options.path)) || "/index"
    var query = options.query
    var body = options.body
    that.data.path = path
    that.data.query = query
    that.data._id = that.parser.hash(path + query)
    that.request(path, query, null).then(res => {
      that._setData(res)
    }).catch((e) => {})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    let event = {
      _eventId: this.data._eventId,
      _ctx: this.data._ctx,
      _id: this.data._id,
      _type: 'onReady'
    }
    app.event.emit(this.data._eventId, event)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let event = {
      _eventId: this.data._eventId,
      _ctx: this.data._ctx,
      _id: this.data._id,
      _type: 'onShow'
    }
    app.event.emit(this.data._eventId, event)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    let event = {
      _eventId: this.data._eventId,
      _ctx: this.data._ctx,
      _id: this.data._id,
      _type: 'onHide',
      _bind: this.data._bind
    }
    app.event.emit(this.data._eventId, event)
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    let event = {
      _eventId: this.data._eventId,
      _ctx: this.data._ctx,
      _id: this.data._id,
      _type: 'onUnload',
      _bind: this.data._bind
    }
    app.event.emit(this.data._eventId, event)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * console.log("左:" + startmarkX + " " + pageX)
   * 处理触屏事件函数
   */
  onPageEvent: function(e) {
    var that = this
    switch (e.direction) {
      case 'down':
      case 'up':
        break;
      default:
        break
    }
  },
})