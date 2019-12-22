export default {
  /**
   * 图片预览
   */
  viewImage(e) {
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
  clickText(e) {
    console.log(e)
  },
  longclickText(e) {
    console.log(e)
  },
  clickA(e) {
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
  longclickA(e) {
    console.log(e)
  },
  clickP(e) {
    console.log(e)
  },
  longclickP(e) {
    console.log(e)
  },
  clickTitle(e) {
    console.log(e)
  },
  longclickTitle(e) {
    console.log(e)
  },
  clickH1(e) {
    console.log(e)
  },
  longclickH1(e) {
    console.log(e)
  },
  clickH2(e) {
    console.log(e)
  },
  longclickH2(e) {
    console.log(e)
  },
  clickH3(e) {
    console.log(e)
  },
  longclickH3(e) {
    console.log(e)
  },
  clickH4(e) {
    console.log(e)
  },
  longclickH4(e) {
    console.log(e)
  },
  clickH5(e) {
    console.log(e)
  },
  longclickH5(e) {
    console.log(e)
  },
  clickH(e) {
    console.log(e)
  },
  longclickH(e) {
    console.log(e)
  },
  clickPe(e) {
    console.log(e)
  },
  longclickPe(e) {
    console.log(e)
  },
  clickLi(e) {
    console.log(e)
  },
  longclickLi(e) {
    console.log(e)
  },
  clickSwiper(e) {
    console.log(e)
  },
  longclickSwiper(e) {
    console.log(e)
  },
  clickVideo(e) {
    console.log(e)
  },
  longclickVideo(e) {
    console.log(e)
  },
  clickMessage(e) {
    console.log(e)
  },
  longclickMessage(e) {
    console.log(e)
  },
}