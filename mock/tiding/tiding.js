var list = [
  {
    type: "label",
    icon: 'title',
    color: 'red',
    badge: 0,
    text: '你的设备',
    path: '',
  },
  {
    type: "message",
    avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big81001.jpg",
    name: "webrowser",
    tag: "1",
    status_tag: "在线",
    summary: " 等我回来一个打十个",
    time: "22:20",
    path: "/tiding/chat"
  },
]

module.exports = {
  list: list,
  nav: {
    title: '设备',
    enablePullDownRefresh: true
  },
}