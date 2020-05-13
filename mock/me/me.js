var list = [{
    type: "movable",
    icon: "roundadd",
    color: 'green'
  },
  {
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
    icon: 'post',
    color: 'olive',
    badge: 0,
    text: '我的小区',
    path: '',
  },
  {
    type: "label",
    icon: 'favor',
    color: 'green',
    badge: 0,
    text: '我的设备',
    path: '',
  },
  {
    type: "label",
    icon: 'question',
    color: 'red',
    badge: 0,
    text: '客服中心',
    path: 'contact',
  },
  {
    type: "interval",
  },
]

module.exports = {
  list: list,
  title: '我的',
  nav: {
    hideNavigation: true,
  },
}