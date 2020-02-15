var list = [{
    type: "label",
    icon: 'titles',
    color: 'red',
    badge: 0,
    text: '小工具',
    path: '',
  }, {
    title: '小工具',
    type: "grid",
    gridCol: 4,
    list: [{
      icon: 'calendar',
      color: 'blue',
      badge: 120,
      text: '公告栏',
      type: 'grid-icon',
      path: '/pages/community/tool/announce/announce',
    }, {
      icon: 'present',
      color: 'blue',
      badge: 1,
      text: '礼帮帮',
      type: 'grid-icon',
      path: '/pages/community/tool/gifts/gifts',
    }, {
      icon: 'light',
      color: 'blue',
      badge: 1,
      text: '天气中心',
      type: 'grid-icon',
      path: '',
    }, {
      icon: 'rank',
      color: 'blue',
      badge: 0,
      text: '访问统计',
      type: 'grid-icon',
      path: '',
    }, ]
  },
  {
    type: "interval",
  },
  {
    type: "label",
    icon: 'titles',
    color: 'green',
    badge: 0,
    text: '资讯指南',
    path: '',
  }, {
    title: '资讯指南',
    type: "grid",
    gridCol: 4,
    list: [{
      icon: 'evaluate',
      color: 'blue',
      badge: 120,
      text: '种植养殖',
      type: 'grid-icon',
      path: '/pages/community/guide/common/common?title=种植养殖&isSearchBar=0',
    }, {
      icon: 'discover',
      color: 'blue',
      badge: 1,
      text: '风土人情',
      type: 'grid-icon',
      path: '/pages/community/guide/common/common?title=风土人情&type=comment',
    }, {
      icon: 'goodsfavor',
      color: 'blue',
      badge: 0,
      text: '土特产',
      type: 'grid-icon',
      path: '/pages/community/guide/common/common?title=土特产&type=article',
    }, {
      icon: 'service',
      color: 'blue',
      badge: 22,
      text: '生活小助手',
      type: 'grid-icon',
      path: '/pages/community/guide/common/common?title=生活小助手&type=dynamic',
    }]
  }
]

module.exports = {
  list: list,
  nav: {
    title: '首页',
    icon1: 'homefill',
  }
  // icon2: 'roundadd',
  // enablePullDownRefresh: true,
  // enablePullUpRefresh: true,
}