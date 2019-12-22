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
    color: "red",
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
        color: 'orange',
        badge: 10,
        name: '文本',
        type: 'grid-icon',
        path: '/text'
      }, {
        icon: 'square',
        color: 'orange',
        badge: 1,
        name: '按钮',
        type: 'grid-icon',
        path: '/index'
      },
      {
        icon: 'picfill',
        color: 'yellow',
        badge: 3,
        name: '图片',
        type: 'grid-icon',
        path: '/image'
      }, {
        icon: 'videofill',
        color: 'red',
        badge: 1,
        name: '视频',
        type: 'grid-icon',
        path: '/video'
      },
      {
        icon: 'card',
        color: 'purple',
        badge: 6,
        name: '卡片',
        type: 'grid-icon',
        path: '/card'
      },
      {
        icon: 'list',
        color: 'cyan',
        badge: 0,
        name: '表格',
        type: 'grid-icon',
        path: '/table'
      }, {
        icon: 'form',
        color: 'blue',
        badge: 0,
        name: '表单',
        type: 'grid-icon',
        path: '/form'
      }, {
        icon: 'settingsfill',
        color: 'mauve',
        badge: 0,
        name: '工具',
        type: 'grid-icon',
        path: '/tools'
      }
    ]
  },
  {
    color: "green",
    type: "label",
    text: "综合demo",
    icon: "discoverfill",
  },
]

module.exports = {
  list: list
}