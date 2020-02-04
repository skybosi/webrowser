var list = [{
    type: "dropdown",
    icon: "infofill",
    text: "下拉文本",
    list: [{
        "text": "基于微信小程序可以支持template模板的功能，而模板又支持动态根据模板名引入，即在需要的地方按需引入自己需要的预先定义好的模板即可按照自己设计的展示出来",
        "type": "p"
      },
      {
        "text": "两个基础前提",
        "type": "h"
      },
      {
        "text": "微信小程序可以定义template，且每一个template可以自定义名字",
        "type": "li"
      },
      {
        "text": "template是可以按需引入的，他们有灵活的内聚性，组合性",
        "type": "li"
      },
    ]
  },
  {
    type: "dropdown",
    icon: "infofill",
    text: "下拉菜单",
    list: [{
        icon: 'videofill',
        badge: 1,
        text: '视频',
        type: 'label',
        path: '/basic/video'
      },
      {
        icon: 'picfill',
        badge: 3,
        text: '图片',
        type: 'label',
        path: '/basic/image'
      }
    ]
  }
]

module.exports = {
  list: list,
  nav: {
    title: '下拉框',
    icon1: 'homefill',
    hideNavigation: true
  }
  // icon2: 'roundadd',
  // enablePullDownRefresh: true,
  // enablePullUpRefresh: true,
}