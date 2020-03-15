var list = [{
    text: `{ "type": "popup", "title": "内容", "isIcon":"是否仅仅是图标, 与title互斥", "icon": "按钮图标", "color": "按钮颜色", "lineColor":"镂空颜色", "shadow":"是否阴影", "shape": "round 圆角/icon 图标", "block":"是否是块元素", "loading":"是否loading" }`,
    type: "code"
  },
  {
    title: "弹一个tip",
    color: "green",
    size: "lg",
    type: "button",
    beforeNode: {
      type: "tip",
      list: [{
          "text": "复制",
        },
        {
          "text": "粘贴",
        },
      ]
    }
  },
]

module.exports = {
  list: list,
  nav: {
    title: 'tip',
    icon1: 'back',
    text1: '返回', // icon2: 'roundadd',
  }
}