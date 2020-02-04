var list = [{
    text: `{ "type": "progress", "shape":"round/radius", "size":"xs/sm/lg", "color":"red/green", "value": 50.0, "active": "1 是否有动态效果"}`,
    type: "code"
  },
  {
    type: "loading",
    isLoad: 0,
    color: 'grey'
  },
  {
    type: "interval"
  },
  {
    type: "loading",
    isLoad: 1
  },
  {
    type: "interval"
  },
  {
    type: "loading",
    isLoad: 2
  },
  {
    type: "interval"
  },
  // {
  //   type: "loading",
  //   loadtype: 'modal'
  // },
  {
    type: "loading",
    loadtype: 'progress',
    loadProgress: 30
  },
]

module.exports = {
  list: list,
  nav: {
    title: '加载',
    icon1: 'back',
    text1: '返回', // icon2: 'roundadd',
  }
}