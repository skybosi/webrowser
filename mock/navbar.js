var list = [{
  type: "nav",
  list: [{
      name: "内嵌页",
      inner: {
        goto: "/content",
      }
    }, {
      name: "地图",
      inner: {
        goto: "/location",
      }
    },
    {
      name: "卡片",
      inner: {
        goto: "/card",
      }
    },
    {
      name: "视频",
      inner: {
        goto: "/video",
      }
    },
    {
      name: "动态2",
      inner: {
        goto: "/image",
      }
    }
  ]
}]

module.exports = {
  list: list,
  title: '水平导航',
  enablePullDownRefresh: false,
  enablePullUpRefresh: false,
}