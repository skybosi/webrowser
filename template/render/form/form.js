export default {
  ChooseImage(e) {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        var imgList = this.getData(e, "imgList") || []
        if (imgList.length != 0) {
          imgList = imgList.concat(res.tempFilePaths)
        } else {
          imgList = res.tempFilePaths
        }
        this.renderData(e, {
          imgList: imgList
        })
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.getData(e, "imgList"),
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    var index = e.currentTarget.dataset.index || e.currentTarget.dataset.index
    wx.showModal({
      title: '召唤师',
      content: '确定要删除这段回忆吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          var imgList = this.getData(e, "imgList")
          imgList.splice(index, 1)
          this.renderData(e, {
            imgList: imgList
          })
        }
      }
    })
  },
}