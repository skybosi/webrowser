var list = [{
    type: "label",
    icon: "infofill",
    text: "flex布局",
  },
  {
    type: "flex-basis",
    icon: "infofill",
    size: 30,
    right: {
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
    left: {
      list: [{
        type: "label",
        icon: "infofill",
        text: "flex布局",
      }, {
        type: "label",
        icon: "infofill",
        text: "flex布局",
      }, {
        type: "label",
        icon: "infofill",
        text: "flex布局",
      }, {
        type: "label",
        icon: "infofill",
        text: "flex布局",
      }, ]
    }
  },
]

module.exports = {
  list: list,
  nav: {
    title: 'flex布局',
    icon1: 'homefill'
  }
  // icon2: 'roundadd',
  // enablePullDownRefresh: true,
  // enablePullUpRefresh: true,
}