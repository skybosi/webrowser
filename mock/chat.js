var list = [{
    text: `{ "url": "...",  "type": "video" }`,
    type: "code"
  },
  {
    type: "chat",
    list: [{
        id: '1',
        chat2Name: '马云',
        name: 'skybosi',
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg',
        from_type: 'self',
        msg_type: 'text',
        summary: '我是1个测试消息！！微笑',
        time: '22:03',
      }, {
        id: '5',
        from_type: 'other',
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg',
        summary: '测试文字成功一切正常！！！',
        msg_type: 'text',
        time: '22:13',
      }, {
        id: '2',
        chat2Name: '马云',
        name: 'skybosi',
        msg_type: 'image',
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg',
        image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg',
        from_type: 'self',
        summary: '我是2个测试消息！！微笑',
      },
      {
        id: '6',
        from_type: 'other',
        msg_type: 'image',
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg',
        image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg',
        time: '22:13',
      }, {
        id: '3',
        chat2Name: '马云',
        name: 'skybosi',
        msg_type: 'sound',
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg',
        from_type: 'self',
        duration: '3"',
      }, {
        id: '7',
        from_type: 'other',
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg',
        msg_type: 'sound',
        summary: '测试语音成功一切正常！！！',
        time: '22:13',
        duration: '4"',
      },
      {
        id: '10',
        chat2Name: '马云',
        name: 'skybosi',
        msg_type: 'location',
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg',
        from_type: 'self',
        location: '湖北省，黄石市',
      }, {
        id: '11',
        from_type: 'other',
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg',
        msg_type: 'location',
        summary: '测试语音成功一切正常！！！',
        time: '22:13',
        location: '湖北省，黄石市',
      },
      {
        id: '4',
        from_type: 'info',
        level: 'normal',
        summary: '对方撤回一条消息',
        time: '22:03',
      },
      {
        id: '8',
        from_type: 'info',
        level: 'error',
        summary: '对方拒绝了你的消息',
        time: '22:03',
      },
      {
        id: '9',
        from_type: 'info',
        level: 'warn',
        summary: '对方开启了好友验证，你还不是他(她)的好友。请先发送好友验证请求，对方验证通过后，才能聊天。',
        notice: '发送好友验证',
        time: '22:03',
      },
    ]
  }
]

module.exports = {
  list: list,
  nav: {
    title: '聊天',
    icon1: 'back',
    text1: '返回',    // icon2: 'roundadd',
  },
  enablePullDownRefresh: true
}