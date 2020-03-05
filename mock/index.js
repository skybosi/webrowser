var list = [{
    type: "login",
    // icon: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
    title: '登录',
    // tag: 'v0.0.4',
    tagcolor: 'red',
    subtitle: '欢迎光临',
    bgColor: 'blue',
    // bgImage: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg"
  },
  {
    type: "label",
    icon: "infofill",
    text: "原理",
    path: "/content"
  },
  {
    type: "interval",
  },
  {
    type: "dropdown",
    text: "布局",
    icon: "explorefill",
    list: [{
        icon: 'text',
        badge: 10,
        text: 'flex布局',
        type: 'label',
        path: '/layout/flex'
      }, {
        icon: 'square',
        badge: 1,
        text: '网格布局',
        type: 'label',
        path: '/layout/grid'
      },
      {
        icon: 'picfill',
        badge: 3,
        text: '比例布局',
        type: 'label',
        path: '/layout/sub'
      },
    ]
  },
  {
    type: "interval",
    size: 'sm'
  },
  {
    type: "dropdown",
    icon: "infofill",
    text: "基础组件",
    list: [{
        type: "flex-sub",
        list: [{
            icon: 'text',
            badge: 10,
            text: '文本',
            type: 'label',
            path: '/basic/text'
          },
          {
            icon: 'icon',
            badge: 10,
            text: '图标',
            type: 'label',
            path: '/basic/icon'
          },
        ]
      },
      {
        type: "flex-sub",
        list: [{
            icon: 'square',
            badge: 1,
            text: '按钮',
            type: 'label',
            path: '/basic/button'
          },
          {
            icon: 'picfill',
            badge: 3,
            text: '图片',
            type: 'label',
            path: '/basic/image'
          },
        ]
      },
      {
        type: "flex-sub",
        list: [{
            icon: 'videofill',
            badge: 1,
            text: '视频',
            type: 'label',
            path: '/basic/video'
          },
          {
            icon: 'pullup',
            badge: 3,
            text: '弹框',
            type: 'label',
            path: '/basic/popup'
          },
        ]
      },
      {
        type: "flex-sub",
        list: [{
            icon: 'loading2',
            badge: 3,
            text: 'tip',
            type: 'label',
            path: '/basic/tip'
          },
          {
            icon: 'loading2',
            badge: 3,
            text: '加载',
            type: 'label',
            path: '/basic/loading'
          },
        ]
      },
      {
        type: "flex-sub",
        list: [{
            icon: 'pulldown',
            badge: 3,
            text: '下拉框',
            type: 'label',
            path: '/basic/dropdown'
          },
          {
            icon: 'loading',
            badge: 3,
            text: '进度条',
            type: 'label',
            path: '/basic/progress'
          },
          {
            icon: 'text',
            badge: 10,
            text: '分割线',
            type: 'label',
            path: '/basic/divider'
          },
        ]
      }
    ]
  },
  {
    type: "interval",
    size: 'sm'
  },
  {
    type: "dropdown",
    icon: "infofill",
    text: "表单组件",
    list: [{
        icon: 'text',
        badge: 10,
        text: '表单',
        type: 'label',
        path: '/form/form'
      },
      {
        icon: 'text',
        badge: 10,
        text: '搜索框',
        type: 'label',
        path: '/form/search'
      },
      {
        icon: 'text',
        badge: 10,
        text: '工具',
        type: 'label',
        path: '/form/tools'
      }
    ]
  },
  {
    type: "interval",
    size: 'sm'
  },
  {
    type: "dropdown",
    icon: "infofill",
    text: "业务组件",
    list: [{
        icon: 'card',
        badge: 10,
        text: '卡片',
        type: 'label',
        path: '/business/card'
      },
      {
        icon: 'locationfill',
        badge: 10,
        text: '地图定位',
        type: 'label',
        path: '/business/location'
      },
      {
        icon: 'messagefill',
        badge: 10,
        text: '聊天',
        type: 'label',
        path: '/business/chat'
      },
      {
        icon: 'list',
        badge: 10,
        text: '导航',
        type: 'label',
        path: '/business/nav'
      },
    ]
  },
  {
    type: "interval",
  },
  {
    type: "label",
    text: "综合demo",
    icon: "discoverfill",
    value: '@obj.value',
    path: "/demo/index"
  },
  {
    type: "divider",
    text: '弹一下',
    value: '@test',
    click: ':clickDivider(test, obj)',
    afterNode: {
      type: "popup",
      poptype: 'image',
      oktile: '背景弹框',
      image: "https://ossweb-img.qq.com/images/lol/web201310/skin/big81006.jpg"
    },
    beforeNode: {
      type: "popup",
      poptype: "checkbox",
      title: '多选弹框',
      checkbox: [{
        value: 0,
        name: '10元',
        checked: false,
        hot: false,
      }, {
        value: 1,
        name: '20元',
        checked: true,
        hot: false,
      }, {
        value: 2,
        name: '30元',
        checked: true,
        hot: true,
      }, {
        value: 3,
        name: '60元',
        checked: false,
        hot: true,
      }, {
        value: 4,
        name: '80元',
        checked: false,
        hot: false,
      }, {
        value: 5,
        name: '100元',
        checked: false,
        hot: false,
      }]
    },
  },
]
var methods = {
  clickDivider: function() {
    console.log('我是分割线!!!')
  }
}
module.exports = {
  list: list,
  nav: {
    title: '首页',
    icon1: 'homefill',
    hideNavigation: true
  },
  methods: methods,
  hideNavigation: true
  // icon2: 'roundadd',
  // enablePullDownRefresh: true,
  // enablePullUpRefresh: true,
}