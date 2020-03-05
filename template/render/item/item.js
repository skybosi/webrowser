export default {
  /**
   * 点击item模板
   */
  clickItem(e) {
    this.beforeClick(e)
    console.log(e)
  },
  /**
   * 长按item模板
   */
  longclickItem(e) {
    this.beforeClick(e)
    console.log(e)
  },
}