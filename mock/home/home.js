var list = [{
    "type": "interval",
    "algin": "text-center"
  },
  {
    "text": "@code",
    "type": "h1",
    "algin": "text-center"
  },
  // {
  //   type: "popup",
  //   poptype: 'dialog',
  //   title: "微信授权？",
  //   content: "请为该小程序授权。。。"
  // }
  {
    "title": "获取密钥",
    "type": "button",
    "block": 1,
    "size": "lg",
    "color": "green",
    "path": "!/quantum/get_key(code)"
  },
  {
    id: "2",
    type: "dynamic",
    swiper_type: "screen",
    image: [
      "https://www.young-ging.cn/myfs/367a6c4ade9c8e26ea6677ec267af2c7.png",
      "https://www.young-ging.cn/myfs/ea3ec194c684a3f0b775660ef6429ecb.png",
      "https://www.young-ging.cn/myfs/7dfc8c2d10b484ec19197ce3d897003a.png",
    ],
    tag: "物联网",
    summary: "物联网、智慧家庭、5G时代的到来，安全需求倍增。量子通信是量子信息技术的主要组成部分，它具有绝对保密, 通信容量大，传输速度快等优点，可以完成经典通信所不能完成的特殊任务。量子通信可以利用无法破译的秘钥系统，实现真正意义上的保密通信，因此量子通信成为当今世界关注的科技前沿。量子密钥分发技术已经逐渐成熟，未来在局域网安全信息应用领域将大有作为。",
    avatar: "https://www.young-ging.cn/myfs/29ba5884ae64411ca5207830e06d72ff.jpg",
    name: "基于家庭物联网安全通信设计",
    time: "蒙燕冰",
    read_count: 1,
    like_count: 2,
    comment_count: 3,
    path: "/home/detail"
  },
]

module.exports = {
  list: list,
  nav: {
    title: '首页'
  }
}