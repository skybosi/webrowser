var list = [{
    text: `{ "type": "popup", "title": "内容", "isIcon":"是否仅仅是图标, 与title互斥", "icon": "按钮图标", "color": "按钮颜色", "lineColor":"镂空颜色", "shadow":"是否阴影", "shape": "round 圆角/icon 图标", "block":"是否是块元素", "loading":"是否loading" }`,
    type: "code"
  },
  {
    type: "grid",
    gridCol: 4,
    list: [{
        icon: 'text',
        text: '背景弹框',
        type: 'grid-icon',
        beforeNode: {
          type: "popup",
          poptype: 'image',
          oktile: '背景弹框',
          image: "https://ossweb-img.qq.com/images/lol/web201310/skin/big81006.jpg"
        },
      },
      {
        icon: 'square',
        text: '对话弹框',
        type: 'grid-icon',
        beforeNode: {
          type: "popup",
          poptype: 'dialog',
          title: '对话弹框',
          icon: 'moneybag',
          iconText: '微信支付',
          content: "对话弹框！"
        },
      },
      {
        icon: 'picfill',
        badge: 3,
        text: '对话弹框',
        type: 'grid-icon',
        beforeNode: {
          type: "popup",
          poptype: 'dialog',
          title: '对话弹框',
          content: "对话弹框！"
        },
      },
      {
        icon: 'videofill',
        text: '底部弹框',
        type: 'grid-icon',
        beforeNode: {
          type: "popup",
          poptype: 'bottom',
          title: '底部弹框',
          content: "底部弹框！"
        },
      },
      {
        icon: 'card',
        text: '单选弹框',
        type: 'grid-icon',
        beforeNode: {
          type: "popup",
          poptype: 'radio',
          title: '单选弹框',
          list: [{
              text: '选项1'
            },
            {
              text: '选项2'
            },
            {
              text: '选项3'
            },
            {
              text: '选项4'
            }
          ]
        },
      },
      {
        icon: 'locationfill',
        text: '多选弹框',
        type: 'grid-icon',
        beforeNode: {
          type: "popup",
          poptype: "checkbox",
          title: '多选弹框',
          checkbox: [{
              value: 0,
              name: '10元',
              checked: false,
              hot: false,
            },
            {
              value: 1,
              name: '20元',
              checked: true,
              hot: false,
            },
            {
              value: 2,
              name: '30元',
              checked: true,
              hot: true,
            },
            {
              value: 3,
              name: '60元',
              checked: false,
              hot: true,
            },
            {
              value: 4,
              name: '80元',
              checked: false,
              hot: false,
            },
            {
              value: 5,
              name: '100元',
              checked: false,
              hot: false,
            }
          ]
        },
      },
      {
        icon: 'form',
        text: '普通弹框',
        type: 'grid-icon',
        beforeNode: {
          type: "popup",
          title: '普通弹框',
          content: "普通弹框！"
        },
      },
      {
        icon: 'settingsfill',
        text: '左边弹框！',
        type: 'grid-icon',
        beforeNode: {
          type: "popup",
          poptype: 'sideL',
          title: 'cevian',
          content: "左边弹框！",
          list: [{
              text: "选项1",
              type: "h"
            },
            {
              text: "选项2",
              type: "h"
            },
            {
              text: "选项2",
              type: "h"
            },
          ]
        },
      },
      {
        icon: 'icon',
        badge: 1,
        text: '右边弹框！',
        type: 'grid-icon',
        beforeNode: {
          type: "popup",
          poptype: 'sideR',
          title: 'cevian',
          content: "右边弹框！",
          list: [{
              icon: 'title',
              badge: 10,
              text: '文本',
              type: 'label',
              path: '/text'
            },
            {
              icon: 'title',
              badge: 1,
              text: '按钮',
              type: 'label',
              path: '/basic/button'
            },
          ]
        },
      }
    ]
  },
]

module.exports = {
  list: list,
  nav: {
    title: '弹框',
    icon1: 'back',
    text1: '返回', // icon2: 'roundadd',
  }
}