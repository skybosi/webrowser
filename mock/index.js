var list = [{
    type: "search-bar",
    autoplay: 1,
    placeholder: ["webrowser", "weapp browser", "小程序"],
    path: "/search"
  },
  {
    type: "label",
    icon: "infofill",
    text: "原理",
    path: "/content"
  },
  {
    type: "label",
    text: "常用模板",
    icon: "explorefill",
    image: [
      "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      "https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg",
      "https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg",
      "https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg",
    ]
  }, {
    type: "grid",
    gridCol: 4,
    list: [{
        icon: 'text',
        badge: 10,
        name: '文本',
        type: 'grid-icon',
        path: '/text'
      }, {
        icon: 'square',
        badge: 1,
        name: '按钮',
        type: 'grid-icon',
        path: '/button'
      },
      {
        icon: 'picfill',
        badge: 3,
        name: '图片',
        type: 'grid-icon',
        path: '/image'
      }, {
        icon: 'videofill',
        badge: 1,
        name: '视频',
        type: 'grid-icon',
        path: '/video'
      },
      {
        icon: 'card',
        badge: 6,
        name: '卡片',
        type: 'grid-icon',
        path: '/card'
      },
      {
        icon: 'locationfill',
        badge: 0,
        name: '地图定位',
        type: 'grid-icon',
        path: '/location'
      }, {
        icon: 'form',
        badge: 3,
        name: '表单',
        type: 'grid-icon',
        path: '/form'
      }, {
        icon: 'settingsfill',
        badge: 6,
        name: '工具',
        type: 'grid-icon',
        path: '/tools'
      },
      {
        icon: 'icon',
        badge: 1,
        name: '图标',
        type: 'grid-icon',
        path: '/icon'
      },
      {
        icon: 'messagefill',
        badge: 0,
        name: '聊天',
        type: 'grid-icon',
        path: '/chat'
      },
      {
        icon: 'safe',
        badge: 0,
        name: '授权',
        type: 'grid-icon',
        path: '/auth'
      },
      {
        icon: 'list',
        badge: 0,
        name: '树状',
        type: 'grid-icon',
        path: '/tree'
      }
    ]
  },
  {
    type: "label",
    text: "综合demo",
    icon: "discoverfill",
  },
]

module.exports = {
  list: list,
  title: '首页',
  enablePullDownRefresh: true,
  enablePullUpRefresh: true,
}