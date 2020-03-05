var list = [{
  type: "nav",
  list: [{
      name: "内嵌页",
      goto: "/content",
    },
    {
      name: "卡片",
      path: "/business/card",
    },
    {
      name: "地图",
      path: "/business/location",
    },
    {
      name: "视频",
      path: "/basic/video",
    },
    {
      name: "动态",
      list: [{
          text: `{"id":"详情id","type":"ad 案例类型","swiper_type":"轮播图类型 screen card","image":[{"url":"资源链接","type":"资源类型 image video","tag":"标签","summary":"概述"}],"tag":"类型标签 比如: 广告","avatar":"发布者头像","name":"发布者名字","time":"发布时间","read_count":"阅读数","thumbup_count":"点赞数","comment_count":"评论数"}`,
          type: "code"
        },
        {
          id: "2",
          type: "ad",
          swiper_type: "card",
          image: [{
            url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg",
            tag: "广告",
            summary: "等我回来打十个！"
          }, {
            url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg",
            tag: "广告2",
            summary: "我已天理为凭，踏入这片荒芜"
          }, {
            url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
            tag: "广告3",
            summary: "不再受凡人的枷锁遏制"
          }],
          tag: "史诗",
          summary: "我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。",
          avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg",
          name: "正义天使 凯尔",
          time: "十天前",
          read_count: 1,
          like_count: 2,
          comment_count: 3
        },
      ]
    }
  ]
}]

module.exports = {
  list: list,
  nav: {
    title: '水平导航',
    icon1: 'back',
    text1: '返回', // icon2: 'roundadd',
  },
  enablePullDownRefresh: false,
  enablePullUpRefresh: false,
}