var list = [{
    type: "label",
    icon: "infofill",
    text: "grid布局",
  },
  {
    type: "grid",
    gridCol: 4,
    list: [{
        icon: 'text',
        badge: 10,
        name: '文本',
        type: 'grid-icon',
        path: '/basic/text'
      }, {
        icon: 'square',
        badge: 1,
        name: '按钮',
        type: 'grid-icon',
        path: '/basic/button'
      },
      {
        icon: 'picfill',
        badge: 3,
        name: '图片',
        type: 'grid-icon',
        path: '/basic/image'
      }, {
        icon: 'videofill',
        badge: 1,
        name: '视频',
        type: 'grid-icon',
        path: '/basic/video'
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
        path: '/form/form'
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
        path: '/basic/icon'
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
        name: '导航',
        type: 'grid-icon',
        path: '/nav'
      }
    ]
  },
]

module.exports = {
  list: list,
  nav: {
    title: '网格',
    icon1: 'homefill'
  }
  // icon2: 'roundadd',
  // enablePullDownRefresh: true,
  // enablePullUpRefresh: true,
}