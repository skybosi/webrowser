var list = [{
    title: "标题",
    type: "input",
    value: "@post.title"
  }, {
    title: "图片上传",
    color: "green",
    type: "upload-img",
    imgList: "@post.imgList"
  }, {
    placeholder: "textarea 多行文本",
    type: "textarea",
    value: "@post.content"
  }, {
    title: "手机号",
    icon: "phone",
    color: "red",
    type: "input",
    value: "@post.phone"
  },
  {
    title: "你的位置",
    icon: "locationfill",
    color: "red",
    type: "input",
    value: "@post.location"
  }, {
    title: "发布",
    size: "lg",
    shadow: 1,
    block: 1,
    color: "green",
    type: "button",
    click: ':clickPublish'
  },
]
var methods = {
  clickPublish: function(ctx, e) {
    console.log(ctx.data._bind.post)
  }
}
module.exports = {
  list: list,
  methods: methods,
  nav: {
    title: '发布',
    icon1: 'back',
    text1: '返回', // icon2: 'roundadd',
  },
}