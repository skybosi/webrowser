var list = [{
  goto: "/demo/home/home",
}, {
  path: "/demo/community/community",
}, {
  path: "/demo/publish/publish",
}, {
  path: "/demo/tiding/tiding",
}, {
  path: "/demo/me/me",
}, ]

module.exports = {
  list: list,
  title: '综合demo',
  tabbar: [{
    tag: "",
    page: "home",
    title: "首页",
    icon: "home",
    path: "/demo/home/home",
    iconSelected: "homefill",
  }, {
    tag: "",
    page: "community",
    title: "社区",
    icon: "circle",
    path: "/demo/community/community",
    iconSelected: "circlefill",
  }, {
    tag: "",
    page: "publish",
    title: "发布",
    icon: "add",
    path: "/demo/publish/publish",
    iconSelected: "add",
  }, {
    tag: "",
    page: "tiding",
    title: "消息",
    icon: "message",
    path: "/demo/tiding/tiding",
    iconSelected: "messagefill",
  }, {
    tag: "",
    page: "me",
    title: "我的",
    icon: "my",
    path: "/demo/me/me",
    iconSelected: "myfill",
  }],
  PageCur: 'home',
  PageIdx: 0,
  // enablePullDownRefresh: true,
  // enablePullUpRefresh: true,
}