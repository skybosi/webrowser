var list = [{
  goto: "/home/home",
}, {
  path: "/community/community",
}, {
  path: "/tiding/tiding",
}, {
  path: "/me/me",
},]

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
  },  {
    tag: "",
    page: "tiding",
    title: "消息",
    icon: "message",
    path: "/tiding/tiding",
    iconSelected: "messagefill",
  }, {
    tag: "",
    page: "me",
    title: "我的",
    icon: "my",
    path: "/me/me",
    iconSelected: "myfill",
  }],
  PageCur: 'home'
}