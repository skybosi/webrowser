var list = [{
    text: `{ "type": "input", "title": "...", "placeholder": "...", "icon": "...", "color": "...", "btnText":"...", "tag":"...", "tag2": "..." }`,
    type: "code"
  }, {
    title: "姓名",
    type: "input"
  }, {
    title: "收货地址",
    icon: "locationfill",
    color: "red",
    type: "input",
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
    checked: 1
  },
  {
    title: "内部消息",
    color: "red",
    type: "switch",
    shape: "radius",
    checked: 1
  },
  {
    text: `{ "type": "radio", "title": "...", "shape":"radius", "checked": 1 }`,
    type: "code"
  },
  {
    title: "单选框",
    color: "red",
    type: "radio",
    shape: "radius",
  },
  {
    text: `{ "type": "checkbox", "title": "...", "shape":"round", "checked": 1 }`,
    type: "code"
  },
  {
    title: "复选框",
    color: "blue",
    type: "checkbox",
    shape: "round",
    checked: 1
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
  list: list
}