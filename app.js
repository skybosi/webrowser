//app.js
import event from './libs/event.js'
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);
  },
  onShow: function(e) {
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        try {
          let capsule = wx.getMenuButtonBoundingClientRect();
          if (capsule) {
            this.globalData.DiviceInfo = e;
            this.globalData.Custom = capsule;
            this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
          } else {
            this.globalData.CustomBar = e.statusBarHeight + 50;
          }
        } catch (e) {
          console.error(e)
        }
      }
    })
  },
  globalData: {
  },
  event: event,
  DEBUG: wx.getStorageSync("debug"),
});