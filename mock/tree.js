var list = [{
  type: "tree",
  list: [{
      name: "宫格",
      inner: {
        type: "grid",
        gridCol: 4,
        gridBorder: 1,
        list: [{
            name: 'appreciate',
            icon: 'appreciate',
            isShow: true,
            type: 'grid-icon',
          },
          {
            name: 'check',
            icon: 'check',
            isShow: true,
            type: 'grid-icon',
          }, {
            name: 'close',
            icon: 'close',
            isShow: true,
            type: 'grid-icon',
          }, {
            name: 'edit',
            icon: 'edit',
            isShow: true,
            type: 'grid-icon',
          }, {
            name: 'emoji',
            icon: 'emoji',
            isShow: true,
            type: 'grid-icon',
          }, {
            name: 'favorfill',
            icon: 'favorfill',
            isShow: true,
            type: 'grid-icon',
          }
        ]
      }
    },
    {
      name: "卡片",
      inner: {
        type: "ad",
        swiper_type: "screen",
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
      }
    },
    {
      name: "视频",
      inner: {
        "type": "video",
        "url": "https://www.young-ging.cn/myfs/b0f895a07636dab89471cd19f852e87d.mp4",
      }
    },
    {
      name: "动态",
      inner: {
        id: "2",
        type: "comment",
        title: "我已天理为凭",
        image: [
          "https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg",
          "https://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg",
          "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
        ],
        tag: "史诗",
        summary: "我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。",
        avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg",
        name: "正义天使 凯尔",
        time: "十天前",
        read_count: 1,
        like_count: 2,
        comment_count: 3,
        comment: [{
          from: "莫甘娜",
          content: '等我回来打十个！！！',
        }, {
          from: "索尔",
          to: "莫甘娜",
          content: '就你那小身板，行吗？？？',
        }]
      }
    },
  ]
}]

module.exports = {
  list: list,
  title: '垂直导航',
  enablePullDownRefresh: false,
  enablePullUpRefresh: false,
}