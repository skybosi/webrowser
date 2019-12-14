//index.js
import Page from '../common/page';
//获取应用实例
const app = getApp()

Page({
  data: {
    templateList: [{
        type: "message",
        image: "https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg",
        name: "伊泽瑞尔",
        tag: "1",
        status_tag: "在线",
        content: " 等我回来一个打十个",
        time: "22:20"
      }, {
        type: "grid",
        gridCol: 3,
        iconList: [{
          icon: 'cardboardfill',
          color: 'red',
          badge: 120,
          name: 'VR'
        }, {
          icon: 'recordfill',
          color: 'orange',
          badge: 1,
          name: '录像'
        }, {
          icon: 'picfill',
          color: 'yellow',
          badge: 0,
          name: '图像'
        }, {
          icon: 'noticefill',
          color: 'olive',
          badge: 22,
          name: '通知'
        }, {
          icon: 'upstagefill',
          color: 'cyan',
          badge: 0,
          name: '排行榜'
        }, {
          icon: 'clothesfill',
          color: 'blue',
          badge: 0,
          name: '皮肤'
        }, {
          icon: 'discoverfill',
          color: 'purple',
          badge: 0,
          name: '发现'
        }, {
          icon: 'questionfill',
          color: 'mauve',
          badge: 0,
          name: '帮助'
        }, {
          icon: 'commandfill',
          color: 'purple',
          badge: 0,
          name: '问答'
        }, {
          icon: 'brandfill',
          color: 'mauve',
          badge: 0,
          name: '版权'
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
  onLoad: function() {
    var templateList = this.shuffle(this.data.templateList)
    this.setData({
      templateList: templateList
    })
  },
  shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr;
  }
})