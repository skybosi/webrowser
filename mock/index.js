var list = [{
    goto: "/home/home",
  },
  {
    path: "/community/community",
  },
]

module.exports = {
  list: list,
  title: '综合demo',
  tabbar: [{
      tag: "",
      page: "home",
      title: "首页",
      icon: "home",
      path: "/home/home",
      iconSelected: "homefill",
    },
    {
      tag: "",
      page: "tiding",
      title: "设备",
      icon: "message",
      path: "/community/community",
      iconSelected: "messagefill",
    }
  ],
  PageCur: 'home'
}