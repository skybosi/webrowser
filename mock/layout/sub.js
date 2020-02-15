var list = [{
    type: "label",
    icon: "infofill",
    text: "比例布局",
  },
  {
    type: "flex-sub",
    list: [{
      type: "label",
      icon: "infofill",
      text: "flex布局",
    }, {
      type: "label",
      icon: "infofill",
      text: "flex布局",
    }, {
      type: "label",
      icon: "infofill",
      text: "flex布局",
    }, ]
  },
  {
    type: "flex-sub",
    list: [{
        sub: 1,
        icon: 'picfill',
        badge: 3,
        text: '图片',
        type: 'grid-icon',
        path: '/image'
      }, {
        sub: 2,
        icon: 'videofill',
        badge: 1,
        text: '视频',
        type: 'grid-icon',
        path: '/video'
      },
      {
        sub: 2,
        icon: 'card',
        badge: 6,
        text: '卡片',
        type: 'grid-icon',
        path: '/card'
      },
    ]
  }
]

module.exports = {
  list: list,
  nav: {
    title: '首页',
    icon1: 'homefill'
  }
  // icon2: 'roundadd',
  // enablePullDownRefresh: true,
  // enablePullUpRefresh: true,
}