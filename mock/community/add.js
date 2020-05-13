var list = [{
    title: "设备名",
    type: "input",
    value: "@post.name"
  },
  {
    placeholder: "设备描述",
    type: "textarea",
    value: "@post.summary"
  },
  {
    title: "发布",
    size: "lg",
    shadow: 1,
    block: 1,
    color: "green",
    type: "button",
    path: "!/quantum/add_device(post)"
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