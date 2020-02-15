export default {
  /**
   * 图片预览
   */
  viewImage(e) {
    this.beforeClick(e)
    let url = e.currentTarget.dataset.url
    let urls = e.currentTarget.dataset.urls || [url]
    if (url) {
      wx.previewImage({
        urls: urls,
        current: urls
      });
    } else {
      console.log("No Image Source")
    }
  },
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
  /**
   *  图片弹框
   */
  clickPopImage(e) {
    console.log(e)
    this.beforeClick(e)
    let index = e.currentTarget.dataset.index
    let path = e.currentTarget.dataset.path || e.target.dataset.path
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
  clickText(e) {
    this.beforeClick(e)
    console.log(e)
  },
  longclickText(e) {
    this.beforeClick(e)
    console.log(e)
  },
  clickA(e) {
    this.beforeClick(e)
    console.log(e)
    let index = e.currentTarget.dataset.index
    let path = e.currentTarget.dataset.href || e.target.dataset.href
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
  clickTip(e) {
    this.beforeClick(e)
    let eventOpts = e.currentTarget.dataset.eventOpts || e.target.dataset.eventOpts || {}
    console.log(eventOpts)
    this.removeElement(e)
  },
  clickDivider(e) {
    let eventOpts = e.currentTarget.dataset.eventOpts || e.target.dataset.eventOpts || {}
    var env = this.getData(e)
    env.click()
  },
  clickButton(e) {
    this.beforeClick(e)
  },
  longclickA(e) {
    this.beforeClick(e)
    console.log(e)
  },
  clickP(e) {
    this.beforeClick(e)
    console.log(e)
  },
  longclickP(e) {
    this.beforeClick(e)
    console.log(e)
  },
  clickTitle(e) {
    this.beforeClick(e)
    console.log(e)
  },
  longclickTitle(e) {
    this.beforeClick(e)
    console.log(e)
  },
  clickH1(e) {
    this.beforeClick(e)
    console.log(e)
  },
  longclickH1(e) {
    this.beforeClick(e)
    console.log(e)
  },
  clickH2(e) {
    this.beforeClick(e)
    console.log(e)
  },
  longclickH2(e) {
    this.beforeClick(e)
    console.log(e)
  },
  clickH3(e) {
    this.beforeClick(e)
    console.log(e)
  },
  longclickH3(e) {
    this.beforeClick(e)
    console.log(e)
  },
  clickH4(e) {
    this.beforeClick(e)
    console.log(e)
  },
  longclickH4(e) {
    this.beforeClick(e)
    console.log(e)
  },
  clickH5(e) {
    this.beforeClick(e)
    console.log(e)
  },
  longclickH5(e) {
    this.beforeClick(e)
    console.log(e)
  },
  clickH(e) {
    this.beforeClick(e)
    console.log(e)
  },
  longclickH(e) {
    this.beforeClick(e)
    console.log(e)
  },
  clickPe(e) {
    this.beforeClick(e)
    console.log(e)
  },
  longclickPe(e) {
    this.beforeClick(e)
    console.log(e)
  },
  clickLi(e) {
    this.beforeClick(e)
    console.log(e)
  },
  longclickLi(e) {
    this.beforeClick(e)
    console.log(e)
  },
  clickSwiper(e) {
    this.beforeClick(e)
    console.log(e)
  },
  longclickSwiper(e) {
    this.beforeClick(e)
    console.log(e)
  },
  clickVideo(e) {
    this.beforeClick(e)
    console.log(e)
  },
  longclickVideo(e) {
    this.beforeClick(e)
    console.log(e)
  },
  clickMessage(e) {
    this.beforeClick(e)
    console.log(e)
  },
  longclickMessage(e) {
    this.beforeClick(e)
    console.log(e)
  },
}