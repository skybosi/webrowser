var list = [{
    text: `{ "type": "input", "title": "...", "placeholder": "...", "icon": "...", "color": "...", "btnText":"...", "tag":"...", "tag2": "..." }`,
    type: "code"
  }, {
    title: "姓名",
    type: "input",
    value: "@user.value",
  }, {
    title: "收货地址",
    icon: "locationfill",
    color: "red",
    type: "input",
    value: "@user.address",
  },
  {
    title: "验证码",
    btnText: "验证码",
    color: "green",
    type: "input",
  },
  {
    title: "手机号码",
    color: "green",
    tag: "+86",
    tag2: "中国大陆",
    type: "input",
  },
  {
    text: `{ "type": "switch", "title": "...", "shape":"radius", "checked": 1 }`,
    type: "code"
  },
  {
    title: "系统消息",
    color: "green",
    type: "switch",
  },
  {
    title: "用户消息",
    color: "green",
    type: "switch",
    value: 1
  },
  {
    title: "内部消息",
    color: "red",
    type: "switch",
    shape: "radius",
    value: 1
  },
  {
    text: `{ "type": "radio", "shape":"radius", "value": [{"title":"","value":""}] }`,
    type: "code"
  },
  {
    color: "red",
    type: "radio",
    shape: "radius",
    list: [{
        title: "单选1",
        value: '1',
      },
      {
        title: "单选2",
        value: '3',
      }
    ]
  },
  {
    text: `{ "type": "checkbox", "shape":"round", "value": [{"title":"","value":""}] }`,
    type: "code"
  },
  {
    color: "blue",
    type: "checkbox",
    shape: "round",
    list: [{
        title: "复选1",
        value: '1',
      },
      {
        title: "复选2",
        value: '2',
      }
    ]
  },
  {
    text: `{ "type": "upload-img", "title": "图片上传" }`,
    type: "code"
  },
  {
    title: "图片上传",
    color: "green",
    type: "upload-img",
  },
  {
    text: `{ "type": "textarea", "placeholder": "多行文本" }`,
    type: "code"
  },
  {
    placeholder: "textarea 多行文本",
    type: "textarea",
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