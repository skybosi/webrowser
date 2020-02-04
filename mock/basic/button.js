var list = [{
    text: `{ "type": "button", "title": "内容", "isIcon":"是否仅仅是图标, 与title互斥", "icon": "按钮图标", "color": "按钮颜色", "lineColor":"镂空颜色", "shadow":"是否阴影", "shape": "round 圆角/icon 图标", "block":"是否是块元素", "loading":"是否loading" }`,
    type: "code"
  },
  {
    title: "默认按钮",
    type: "button",
  },
  {
    title: "颜色按钮",
    color: "green",
    type: "button",
  },
  {
    title: "按钮大小",
    color: "green",
    size: "lg",
    type: "button",
  },
  {
    title: "按钮阴影",
    color: "blue",
    shadow: 1,
    type: "button",
  },
  {
    title: "镂空按钮",
    size: "lg",
    shadow: 1,
    lineColor: "red",
    shape: "round",
    type: "button",
  },
  {
    title: "禁止点击",
    size: "lg",
    shadow: 1,
    disabled: 1,
    lineColor: "red",
    shape: "round",
    type: "button",
  },
  {
    icon: "refresh",
    shadow: 1,
    isIcon: 1,
    color: "black",
    type: "button",
  },
  {
    icon: "loading2",
    shadow: 1,
    isIcon: 1,
    color: "black",
    loading: 1,
    type: "button",
  },
  {
    title: "块按钮",
    size: "lg",
    shadow: 1,
    block: 1,
    color: "red",
    type: "button",
  },
  {
    title: "图标按钮",
    size: "lg",
    icon: "upload",
    shadow: 1,
    block: 1,
    color: "blue",
    type: "button",
  },
]

module.exports = {
  list: list,
  nav: {
    title: '按钮',
    icon1: 'back',
    text1: '返回',    // icon2: 'roundadd',
  }
}