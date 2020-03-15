export default {
  /**
   * 长按图片
   */
  longclickImg(e) {
    this.beforeClick(e)
    let url = e.currentTarget.dataset.url
    let urls = e.currentTarget.dataset.urls || [url]
    if (url) {
      wx.showShareMenu({
        title: '墨鱼儿-服务于人们的小社区',
        imageUrl: url,
        path: '/pages/index/index'
      })
    }
  },
  clickTip(e) {
    this.beforeClick(e)
    this.removeElement(e)
  },
  clickDivider(e) {
    this.beforeClick(e)
    let eventOpts = e.currentTarget.dataset.eventOpts || e.target.dataset.eventOpts || {}
  },
  clickPopup(e) {
    this.beforeClick(e)
    this.removeElement(e)
  },
  closeNoticebar(e) {
    this.beforeClick(e)
    this.renderData(e, {
      show: e.detail.value
    })
  },
  closeTag(e) {
    this.beforeClick(e)
    this.renderData(e, {
      show: e.detail.value
    })
  },
  chooseCheckbox(e) {
    this.beforeClick(e)
    var value = e.currentTarget.dataset.value || e.target.dataset.value
    var checkbox = this.getData(e, 'checkbox')
    checkbox[value].checked = !(checkbox[value].checked || false)
    this.renderData(e, {
      checkbox: checkbox
    })
  },
}