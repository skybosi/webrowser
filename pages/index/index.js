//index.js
import Page from '../common/page';
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    templateList: [{
        type: "message",
        image: "https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg",
        name: "webrowser",
        tag: "1",
        status_tag: "在线",
        content: " 等我回来一个打十个",
        time: "22:20"
      }, {
        type: "grid",
        gridCol: 3,
        list: [{
          icon: 'cardboardfill',
          color: 'red',
          badge: 120,
          name: 'VR',
          type: 'grid-icon'
        }, {
          icon: 'recordfill',
          color: 'orange',
          badge: 1,
          name: '录像',
          type: 'grid-icon'
        }, {
          icon: 'picfill',
          color: 'yellow',
          badge: 0,
          name: '图像',
          type: 'grid-icon'
        }, {
          icon: 'noticefill',
          color: 'olive',
          badge: 22,
          name: '通知',
          type: 'grid-icon'
        }, {
          icon: 'upstagefill',
          color: 'cyan',
          badge: 0,
          name: '排行榜',
          type: 'grid-icon'
        }, {
          icon: 'clothesfill',
          color: 'blue',
          badge: 0,
          name: '皮肤',
          type: 'grid-icon'
        }, {
          icon: 'discoverfill',
          color: 'purple',
          badge: 0,
          name: '发现',
          type: 'grid-icon'
        }, {
          icon: 'questionfill',
          color: 'mauve',
          badge: 0,
          name: '帮助',
          type: 'grid-icon'
        }, {
          icon: 'commandfill',
          color: 'purple',
          badge: 0,
          name: '问答',
          type: 'grid-icon'
        }, {
          icon: 'brandfill',
          color: 'mauve',
          badge: 0,
          name: '版权',
          type: 'grid-icon'
        }]
      }, {
        type: "menu1",
        icon: "upstagefill",
        title: "我是图标菜单"
      },
      {
        type: "menu2",
        icon: "commandfill",
        title: "我是图标菜单",
        image: [
          "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
          "https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg",
          "https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg",
          "https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg",
        ]
      }, {
        type: "card",
        image: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
        tag: "史诗",
        summary: "我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。",
        avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg",
        name: "正义天使 凯尔",
        time: "十天前",
        read_count: 1,
        like_count: 2,
        comment_count: 3
      }
    ]
  },
  /**
   * 洗牌算法
   */
  shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var templateList = this.shuffle(this.data.templateList)
    this.setData({
      templateList: templateList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },
})