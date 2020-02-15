var list = [{
    text: `{ "tags": [{"tag":"xxx", "color":"","closeable":1, "size":""}], "type": "tag" }`,
    type: "code"
  }, {
    type: "tag",
    tags: [{
        tag: "标签1",
        color: "red",
        closeable: 1,
      }, {
        tag: "Tag2",
        color: "green",
        shape: 'radius'
      }, {
        tag: "标签3",
        size: 'sm',
      },
      {
        tag: "标签4",
        shape: 'round'
      }
    ]
  },
  {
    text: `{ "text": "...",  "type": "noticebar", "closeable": 1 }`,
    type: "code"
  }, {
    type: "noticebar",
    closeable: 1,
    color: "red",
    text: "webrowser weapp browser, 这是一个顶部消息提示框，可以关闭的！"
  },
  {
    type: "interval",
  },
  {
    text: `{"title": "xxx","value": 0, "step":1, "min":0, "max":10, "type": "stepper"}`,
    type: "code"
  }, {
    type: "stepper",
    value: 0,
    min: 0,
    step: 1,
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
    value: 3,
    count: 7,
  },
  {
    type: "rate",
    value: 3,
    count: 7,
    icon: 'like'
  },
  {
    type: "rate",
    value: 3,
    count: 7,
    icon: 'selection'
  },
  {
    type: "interval",
  },
]

module.exports = {
  list: list,
  nav: {
    title: '工具',
    icon1: 'back',
    text1: '返回',    // icon2: 'roundadd',
  },
}