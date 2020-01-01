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
  tabSelect(e, ins) {
    this.renderData(e, {
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.getData(e, "list");
    let tabHeight = 0;
    if (!this.getData(e, "load")) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + i);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;
        }).exec();
      }
      this.renderData(e, {
        list: list, load: true
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        this.renderData(e, {
          TabCur: i,
          VerticalNavTop: (i - 1) * 50
        })
        return false
      }
    }
  }
})