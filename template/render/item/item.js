export default {
  /**
   * 点击item模板
   */
  clickItem(e) {
    console.log(e)
    let index = e.currentTarget.dataset.index
    let path = e.currentTarget.dataset.path
    let id = e.currentTarget.dataset.id
    if (!path && id) {
      path = '/template/content/content?id=' + id
    }
    if ('' != path) {
      wx.navigateTo({
        url: path
      })
    } else {
      console.log("path is empty!")
    }
  },
  /**
   * 长按item模板
   */
  longclickItem(e) {
    console.log(e)
  },
}