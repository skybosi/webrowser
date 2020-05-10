var list = [{
    type: "label",
    color: 'green',
    badge: 0,
    text: '消息中心',
    path: '',
  },
  {
    type: "label",
    color: 'gray',
    badge: 0,
    text: '版本更新',
    path: '',
  },
  {
    type: "label",
    color: 'red',
    badge: 0,
    text: '关于我们',
    path: 'wx://contact',
  }, {
    type: 'interval'
  },
  {
    title: "登出",
    size: "lg",
    shadow: 1,
    block: 1,
    color: "red",
    type: "button",
  },
]

module.exports = {
  list: list,
  title: '设置'
  // enablePullDownRefresh: true,
  // enablePullUpRefresh: true,
}