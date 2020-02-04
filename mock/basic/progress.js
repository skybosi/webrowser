var list = [{
  text: `{ "type": "progress", "shape":"round/radius", "size":"xs/sm/lg", "color":"red/green", "value": 50.0, "active": "1 是否有动态效果"}`,
    type: "code"
  },
  {
    type: "progress",
    value: 61.9
  },
  {
    type: "progress",
    value: 61.9,
    shape: 'round',
    size: 'lg'
  },
  {
    type: "progress",
    value: 61.9,
    color: 'green',
    shape: 'radius',
    size: 'sm'
  },
  {
    type: "progress",
    value: 61.9,
    color: 'green'
  },
  {
    type: "progress",
    value: 61.9,
    color: 'blue',
    active: 1
  },
]

module.exports = {
  list: list,
  nav: {
    title: '进度条',
    icon1: 'back',
    text1: '返回', // icon2: 'roundadd',
  }
}