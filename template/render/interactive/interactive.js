const app = getApp()

export default ({
  /**
   * 进入发布者个人中心
   */
  getUserInfo(e) {
    var myID = e.currentTarget.dataset.myid
    var openID = e.currentTarget.dataset.openid
    wx.navigateTo({
      url: '/pages/me/mime/mime?myID=' + myID + '&openID=' + openID,
    })
  },
  /**
   * 联系发布者
   */
  contactUser(e) {
    var myID = e.currentTarget.dataset.myid
    var openID = e.currentTarget.dataset.openid
    wx.navigateTo({
      url: '/pages/tiding/chat/chat?id=' + myID + '&openID=' + openID + "&pageId=content",
    })
  },
  hideModal(e) {
    let chose = e.currentTarget.dataset.chose || 'ignore'
    var callback = e.currentTarget.dataset.callback
    this.setData({
      ["modal.chose"]: chose,
      ["modal.modalstatus"]: null,
    })
    if (callback) {
      let callback_fun = new Function("return " + callback)
      callback_fun(chose)
    }
  },
  updateAutoplay(e) {
    console.log("updateAutoplay:" + JSON.stringify(e))
    if (e.type == 'focus') {
      this.setData({
        ["searchBar.autoplay"]: 0
      })
    } else {
      this.setData({
        ["searchBar.autoplay"]: 1
      })
    }
  },
  getSearchPage(e) {
    console.log(e)
    let index = e.currentTarget.dataset.index
    let path = e.currentTarget.dataset.path
    let id = e.currentTarget.dataset.id
    if ('' != path) {
      wx.navigateTo({
        url: '/pages/index/index?path=' + path
      })
    } else {
      console.log("path is empty!")
    }
  },
})