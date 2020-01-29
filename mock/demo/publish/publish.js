var list = [{
    title: "标题",
    type: "input"
  }, {
    title: "图片上传",
    color: "green",
    type: "upload-img",
  }, {
    placeholder: "textarea 多行文本",
    type: "textarea",
  }, {
    title: "手机号",
    icon: "phone",
    color: "red",
    type: "input",
  },
  {
    title: "你的位置",
    icon: "locationfill",
    color: "red",
    type: "input",
  }, {
    title: "发布",
    size: "lg",
    shadow: 1,
    block: 1,
    color: "green",
    type: "button",
  },
]

module.exports = {
  list: list,
  nav: {
    title: '表单',
    icon1: 'back',
    text1: '返回', // icon2: 'roundadd',
  },
}