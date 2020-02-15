export default {
  /**
   * 点击item模板
   */
  clickItem(e) {
    this.beforeClick(e)
    console.log(e)
    let index = e.currentTarget.dataset.index
    let path = e.currentTarget.dataset.path
    let id = e.currentTarget.dataset.id
    if ('' != path && undefined != path) {
      wx.navigateTo({
        url: '/pages/index/index?path=' + path
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