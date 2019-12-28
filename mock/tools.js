var list = [{
    text: `{"text": "...","type": "noticebar","color":"red"}`,
    type: "code"
  }, {
    type: "noticebar",
    color: "red",
    text: "webrowser weapp browser, 这是一个顶部消息提示框，哈哈哈。。。"
  },
  {
    type: "interval",
  },
  {
    text: `{"text": "...","type": "noticebar","wrapable":true,"scrollable": 1}`,
    type: "code"
  }, {
    type: "noticebar",
    color: "green",
    wrapable: false,
    text: "webrowser weapp browser, 这是一个顶部消息提示框，哈哈哈。。。"
  },
  {
    type: "interval",
  },
  {
    text: `{ "text": "...",  "type": "noticebar", "closeable": 1 }`,
    type: "code"
  }, {
    type: "noticebar",
    closeable: 1,
    color: "blue",
    text: "webrowser weapp browser, 这是一个顶部消息提示框，可以关闭的！"
  },
  {
    type: "interval",
  },
  {
    text: `{"title": "xxx","start": 0, "step":1, "min":0, "max":10, "type": "stepper"}`,
    type: "code"
  }, {
    type: "stepper",
    start: 1,
    min: 0,
    max: 10,
    title: "步数器"
  },
  {
    type: "interval",
  },
  {
    text: `{ "title": "xxx", "value": 4.5, "count": 5, "type": "rate" }`,
    type: "code"
  }, {
    type: "rate",
    value: 3.5,
    count: 5,
  },
  {
    type: "interval",
  },
  {
    text: `{ "tags": [{"tag":"xxx", "type":"danger/warning/primary/success"}], "type": "tag" }`,
    type: "code"
  }, {
    type: "tag",
    tags: [{
        tag: "标签1",
        type: "danger"
      }, {
        tag: "Tag2",
        type: "warning"
      }, {
        tag: "标签3",
        type: "primary"
      },
      {
        tag: "标签4",
        type: "success"
      }
    ]
  },
]

module.exports = {
  list: list,
  title: '工具'
}