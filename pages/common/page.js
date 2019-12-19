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
  return Page({
    props: {
      _touchTime: 0, // 时间记录，用于滑动时且时间小于1s则执行左右滑动
      _interval: "", // 记录/清理时间记录
      _touchStartX: 0, //触摸时的原点
      _touchStartY: 0, //触摸时的原点
      _touchMoveX: 0, // x轴方向移动的距离
      _touchMoveY: 0, // y轴方向移动的距离
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
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
      this.props._reachBottom = true
    },
    /**
     * 页面滚动事件的处理函数
     */
    onPageScroll: function(e) {
      this.props._pageScroll = e.scrollTop
    },
    // 触摸开始事件
    touchStart: function(e) {
      let self = this
      this.props._touchStartX = e.touches[0].pageX; // 获取触摸时的原点
      this.props._touchStartY = e.touches[0].pageY; // 获取触摸时的原点
      // 使用js计时器记录时间
      this.props._interval = setInterval(function() {
        self.props._touchTime++;
      }, 100);
    },
    // 触摸移动事件
    touchMove: function(e) {
      this.props._touchMoveX = e.touches[0].pageX;
      this.props._touchMoveY = e.touches[0].pageY;
    },
    // 触摸结束事件
    touchEnd: function(e) {
      var moveX = this.props._touchMoveX - this.props._touchStartX
      var moveY = this.props._touchMoveY - this.props._touchStartY
      if (Math.sign(moveX) == -1) {
        moveX = -moveX
      }
      if (Math.sign(moveY) == -1) {
        moveY = -moveY
      }
      if (moveX <= moveY) { // 上下
        // 向上滑动
        if (this.props._touchMoveY - this.props._touchStartY <= -60 && this.props._touchTime > 2) {
          console.log("向上滑动")
          e.type = "up"
          // 上拉到底
          if (this.props._reachBottom) {
            e.type = "upbottom"
          }
          this.pageEventObserver ? this.pageEventObserver(e) : null
        }
        // 向下滑动
        if (this.props._touchMoveY - this.props._touchStartY >= 60 && this.props._touchTime > 2) {
          console.log("向下滑动")
          e.type = "down"
          // 下拉到顶
          if (this.props._pageScroll == 0) {
            e.type = "downtop"
          }
          this.pageEventObserver ? this.pageEventObserver(e) : null
        }
      } else { // 左右
        // 向左滑动
        if (this.props._touchMoveX - this.props._touchStartX <= -40 && this.props._touchTime > 2) {
          console.log("左滑页面")
          e.type = "left"
          this.pageEventObserver ? this.pageEventObserver(e) : null
        }
        // 向右滑动
        if (this.props._touchMoveX - this.props._touchStartX >= 40 && this.props._touchTime > 2) {
          console.log('向右滑动')
          e.type = "right"
          this.pageEventObserver ? this.pageEventObserver(e) : null
        }
      }
      clearInterval(this.props._interval); // 清除setInterval
      this.props._touchTime = 0;
    },
    ...context
  });
}