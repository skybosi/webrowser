export default {
  /**
   * 点击item模板
   */
  clickItem(e) {
    this.beforeClick(e)
    console.log(e)
    let env = e.currentTarget.dataset.env || e.target.dataset.env
    let index = e.currentTarget.dataset.index || e.target.dataset.index
    let path = e.currentTarget.dataset.path || e.target.dataset.path
    let id = e.currentTarget.dataset.id || e.target.dataset.id
    let query = e.currentTarget.dataset.query || e.target.dataset.query
    if ('' != path && undefined != path) {
      let eventId = env._id + ">" + this.parser.BKDRHash(path + query)
      this.app.event.on(eventId, this, function(e) {
        console.log(e)
      })
      wx.navigateTo({
        url: '/pages/index/index?path=' + path + '&ctx=' + JSON.stringify(env)
      })
    } else {
      console.log("path is empty!")
      wx.showToast({
        title: '无效跳转！',
      })
    }
  },
  /**
   * 长按item模板
   */
  longclickItem(e) {
    this.beforeClick(e)
    console.log(e)
  },
}