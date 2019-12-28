var list = [
  {
    "text": "模板驱动的小程序页面动态渲染",
    "type": "title"
  },
  {
    "text": "该项目名称：webrowser => weapp browser",
    "type": "h"
  },
  {
    "text": "原理：",
    "type": "h"
  },
  {
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
  {
    "text": "所以:",
    "type": "h"
  },
  {
    "text": "可以预先定义或设计好需要使用的常用模板，包括起可能存在的内部样式及布局",
    "type": "p"
  },
  {
    "text": "按照自己的想法, 使用和组合预先定义好的模板，填写好相关数据",
    "type": "p"
  },
  {
    "text": "因为模板可以随意组合，所以只需要在外侧套一层wx:for进行循环渲染，即可得到按照自己的想法组合出来的页面来",
    "type": "p"
  },
  {
    "text": "又因为，每一个模板可以定义相关的点击/长按事件，在相关的事件处理时，即可跳转新的页面中，而新的页面又是另一个预先定义好的模板的组合，如此又可以按照自己的设计的样式渲染出来，即可得到新的页面了",
    "type": "p"
  },
  {
    "text": "综上",
    "type": "h"
  },
  {
    "text": "所有的页面除了展示，加上点击跳转等事件处理，一切都是这类似的组合；整个小程序，只需要一个物理page即可，其他页面均可以用数据驱动加载出来，所以最后小程序变成一个类似于浏览器的功能！ ",
    "type": "p"
  },
  {
    "text": "故 得名：weapp browser",
    "type": "h5"
  },
  {
    "url": "https://www.young-ging.cn/myfs/bc65e35b82a5d632e548c41bddc87599.jpg",
    "urls": [
      "https://www.young-ging.cn/myfs/bc65e35b82a5d632e548c41bddc87599.jpg"
    ],
    "type": "img",
    "tag": "测试"
  },
  {
    "text": "【END】",
    "type": "pe"
  }
]

module.exports = {
  list: list,
  title: '原理'
}