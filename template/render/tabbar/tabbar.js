export default {
  NavChange(e) {
    this.beforeClick(e)
    // 处理前一个页面的生命周期
    // this.getCurrComponent().onHide()
    // this.getCurrComponent().onUnload()
    this.renderData(e, {
      PageCur: e.currentTarget.dataset.cur,
      isNavChange: true,
      isShow: true
    })
    var index = e.currentTarget.dataset.index
    var path = e.currentTarget.dataset.path || e.target.dataset.path
    var id = e.currentTarget.dataset.id
    var query = e.currentTarget.dataset.query
    this.data.path = path
    this.data.query = query
    this.mock.get(path, query).then(res => {
      this.renderData(e, {
        ["pages[" + PageIdx + "]"]: res
      })
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
  },
}