// template/render/render.js
export default {
  render(ctx) {
    console.log(this)
  },
  clickMessage(e) {
    wx.showModal({
      title: '点击了',
      content: '你点击了Message',
    })
  },
  longclickMessage(e) {
    wx.showModal({
      title: '长按了',
      content: '你长按了Message',
    })
  },
  clickGrid(e) {
    wx.showModal({
      title: '点击了',
      content: '你点击了Grid',
    })
  },
  longclickGrid(e) {
    wx.showModal({
      title: '长按了',
      content: '你长按了Grid',
    })
  },
  clickMenu(e) {
    wx.showModal({
      title: '点击了',
      content: '你点击了Menu',
    })
  },
  longclickMenu(e) {
    wx.showModal({
      title: '长按了',
      content: '你长按了Menu',
    })
  },
  clickMenu2(e) {
    wx.showModal({
      title: '点击了',
      content: '你点击了Menu2',
    })
  },
  longclickMenu2(e) {
    wx.showModal({
      title: '长按了',
      content: '你长按了Menu2',
    })
  },
  clickCard(e) {
    wx.showModal({
      title: '点击了',
      content: '你点击了Card',
    })
  },
  longclickCard(e) {
    wx.showModal({
      title: '长按了',
      content: '你长按了Card',
    })
  },
}