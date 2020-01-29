var list = [{
  type: "tabbar",
  tabbar: [{
    tag: "",
    page: "home",
    title: "首页",
    icon: "home",
    iconSelected: "homefill",
  }, {
    tag: "",
    page: "community",
    title: "社区",
    icon: "circle",
    iconSelected: "circlefill",
  }, {
    tag: "",
    page: "publish",
    title: "发布",
    icon: "add",
    iconSelected: "add",
  }, {
    tag: "",
    page: "tiding",
    title: "消息",
    icon: "message",
    iconSelected: "messagefill",
  }, {
    tag: "",
    page: "me",
    title: "我的",
    icon: "my",
    iconSelected: "myfill",
  }, ],
  pages: [{
    tag: "",
    page: "home",
    goto: "/demo/home/home",
    title: "首页",
    icon: "home",
    iconSelected: "homefill",
  }, {
    tag: "",
    page: "community",
    goto: "/demo/community/community",
    title: "社区",
    icon: "circle",
    iconSelected: "circlefill",
  }, {
    tag: "",
    page: "publish",
    goto: "/demo/publish/publish",
    title: "发布",
    icon: "add",
    iconSelected: "add",
  }, {
    tag: "",
    page: "tiding",
    goto: "/demo/tiding/tiding",
    title: "消息",
    icon: "message",
    iconSelected: "messagefill",
  }, {
    tag: "",
    page: "me",
    goto: "/demo/me/me",
    title: "我的",
    icon: "my",
    iconSelected: "myfill",
  }, ],
  PageCur: 'home',
  PageIdx: 0,
}, ]

module.exports = {
  list: list,
  title: '综合demo',
  // enablePullDownRefresh: true,
  // enablePullUpRefresh: true,
}