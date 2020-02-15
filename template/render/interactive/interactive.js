const QQMapWX = require('../../../libs/map/qqmap-wx-jssdk.min.js')
let qqmapsdk = qqmapsdk = new QQMapWX({
  key: 'W4WBZ-TUD65-IDAIR-QPM36-HMFQ5-CGBZP'
});

const app = getApp()

export default ({
  /**
   * 进入发布者个人中心
   */
  getUserInfo(e) {
    this.beforeClick(e)
    var uid = e.currentTarget.dataset.uid
    var openID = e.currentTarget.dataset.openid
    wx.navigateTo({
      url: '/pages/me/mime/mime?uid=' + uid + '&openID=' + openID,
    })
  },
  /**
   * 联系发布者
   */
  contactUser(e) {
    this.beforeClick(e)
    var uid = e.currentTarget.dataset.uid
    var openID = e.currentTarget.dataset.openid
    wx.navigateTo({
      url: '/pages/tiding/chat/chat?id=' + uid + '&openID=' + openID + "&pageId=content",
    })
  },
  hideModal(e) {
    this.beforeClick(e)
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
    this.beforeClick(e)
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
  /**
   * search-bar
   */
  getSearchPage(e) {
    this.beforeClick(e)
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
  /**
   * tree
   */
  tabSelect(e) {
    this.beforeClick(e)
    wx.pageScrollTo({
      scrollTop: 0,
    })
    this.renderData(e, {
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    this.beforeClick(e)
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
        list: list,
        load: true
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
  },
  /**
   * map-location
   */
  regionchange(e) {
    // mark 不支持input等原生组件兼容
    e.mark = {
      tindex: e.currentTarget.dataset.tindex || e.target.dataset.tindex,
      route: e.currentTarget.dataset.route || e.target.dataset.route
    }
    // 地图发生变化的时候，获取中间点，也就是cover-image指定的位置
    if (e.type == 'end' && (e.causedBy == 'scale' || e.causedBy == 'drag')) {
      this.renderData(e, {
        address: "正在获取地址..."
      })
      this.mapCtx = wx.createMapContext("maps");
      this.mapCtx.getCenterLocation({
        type: 'gcj02',
        success: (res) => {
          //console.log(res)
          this.renderData(e, {
            latitude: res.latitude,
            longitude: res.longitude
          })
          this.getAddress(e, res.longitude, res.latitude);
        }
      })
    }
  },
  getAddress: function(e, lng, lat) {
    //根据经纬度获取地址信息
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: lat,
        longitude: lng
      },
      success: (res) => {
        console.log(res)
        this.renderData(e, {
          address: res.result.formatted_addresses.recommend //res.result.address
        })
      },
      fail: (res) => {
        this.renderData(e, {
          address: "获取位置信息失败"
        })
      }
    })
  },
  currentLocation(e) {
    this.beforeClick(e)
    //当前位置
    const that = this;
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        that.renderData(e, {
          latitude: res.latitude,
          longitude: res.longitude
        })
        //that.getAddress(res.longitude, res.latitude);
      }
    })
  }
})