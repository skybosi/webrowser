var list = [{
    type: "head",
    // icon: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
    title: '登录',
    // tag: 'v0.0.4',
    tagcolor: 'red',
    subtitle: '欢迎光临',
    bgColor: 'blue',
    // bgImage: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg"
  },
  {
    type: "label",
    icon: 'titles',
    color: 'red',
    badge: 0,
    text: '你的设备',
    path: '',
  },
  {
    title: '小工具',
    type: "grid",
    gridCol: 3,
    list: [{
        icon: 'mobilefill',
        color: 'blue',
        badge: 2,
        text: '手机',
        type: 'grid-icon',
      }, {
        icon: 'discover',
        color: 'blue',
        badge: 2,
        text: '电脑',
        type: 'grid-icon',
      }, {
        icon: 'light',
        color: 'blue',
        badge: 1,
        text: '路由器',
        type: 'grid-icon',
      },
      {
        icon: 'roundadd',
        color: 'blue',
        text: '添加',
        type: 'grid-icon',
        path: '/community/add'
      },
    ]
  },
]

module.exports = {
  list: list,
  nav: {
    title: '设备',
    hideNavigation: true,
    url: '/quantum/get_device_list'
  }
}