//index.js
import Page from '../common/page';
var mock = require("../../utils/mock.js")

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
    mock.getMockData(path, query).then(res => {
      var delta = this.diff(res, this.data)
      this.setData(delta)
      this.lru.set(path, delta)
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
        mock.getMockData(path, query).then(res => {
          this.data.path = path
          this.data.query = query
          var delta = this.diff(res, this.data)
          this.setData(delta)
          this.lru.set(path, delta)
        })
        break;
      default:
        break
    }
  }
})