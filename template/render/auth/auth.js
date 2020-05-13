export default {
  __init(e) {
    // console.log(this, e)
    // var that = this
    // setTimeout(function() {
    //   wx.getStorage({
    //     key: 'auth',
    //     success: function(res) {
    //       console.log(res.data)
    //       that._setData({
    //         [e._route + ".userInfo"]: res.data.userInfo,
    //         [e._route + ".hasUserInfo"]: res.data.hasUserInfo
    //       })
    //     },
    //   })
    // }, 300);
  },
  /**
   * 点击item模板
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  bindGetUserInfo: function(e) {
    var that = this
    wx.getStorage({
      key: 'auth',
      success: function(res) {
        that.renderData(e, res.data)
      },
      fail: function(ex) {
        that.authScope(e)
      }
    })
  },
  authScope(e) {
    var that = this
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
              // 用户已经授权过,不需要显示授权页面,所以不需要改变 hasUserInfo 的值
              // 根据自己的需求有其他操作再补充
              // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
              var userInfo = res.userInfo
              wx.login({
                success: res => {
                  // 获取到用户的 code 之后：res.code
                  userInfo.code = res.code
                  console.log("login:", userInfo)
                  that.callback(userInfo)
                }
              });
            }
          });
        } else {
          // 用户没有授权
          // 改变 hasUserInfo 的值，显示授权页面
          that.renderData(e, {
            hasUserInfo: false
          });
        }
      }
    });
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      // 获取到用户的信息了，打印到控制台上看下
      //授权成功后,通过改变 hasUserInfo 的值，让实现页面显示出来，把授权页面隐藏起来
      if (null != e.detail.userInfo.openID) {
        that.renderData(e, {
          hasUserInfo: true,
          userInfo: e.detail.userInfo
        });
        wx.setStorage({
          key: 'auth',
          data: {
            hasUserInfo: true,
            userInfo: e.detail.userInfo
          }
        })
      }
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function(res) {
          // 用户没有授权成功，不需要改变 hasUserInfo 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  },
  callback(userInfo) {
    var that = this
    that.request2("/user/register", null, userInfo, false).then(res => {
      var data = res.data
      userInfo.myID = data.myID
      userInfo.openID = data.openID
      console.log(userInfo)
      wx.setStorage({
        key: 'auth',
        data: {
          hasUserInfo: true,
          userInfo: userInfo
        }
      })
      that.renderData(e, {
        hasUserInfo: true,
        userInfo: userInfo
      });
    }).catch((e) => {})
  }
}