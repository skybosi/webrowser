const app = getApp();
import render from '../../template/render/render.js'

let originPage = Page

export default function(context = {}) {
  Object.assign(context, render)
  let originOnLoad = context.onLoad
  context.onLoad = function(option) {
    const self = this
    console.log("onload common page")
    originOnLoad && originOnLoad.call(self, option)
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
  return Page({
    props: {
      _reachBottom: false,
      _pageScroll: 0
    },
    data: Object.assign(context.data, {
      // authConfig: authConfig,
      Custom: app.globalData.Custom,
      CustomBar: app.globalData.CustomBar,
      StatusBar: app.globalData.StatusBar,
      ScreenWidth: app.globalData.DiviceInfo.screenWidth,
      ScreenHeight: app.globalData.DiviceInfo.screenHeight,
    }),
    // addData(data) {
    //   return context.setData(Object.assign(context.data, data))
    // },
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