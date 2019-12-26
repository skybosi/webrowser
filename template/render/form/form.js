export default {
  ChooseImage(e) {
    var tidx = e.currentTarget.dataset.tidx || e.currentTarget.dataset.tidx
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        this.data.list[tidx].imgList = this.data.list[tidx].imgList || []
        if (this.data.list[tidx].imgList.length != 0) {
          this.data.list[tidx].imgList = this.data.list[tidx].imgList.concat(res.tempFilePaths)
        } else {
          this.data.list[tidx].imgList = res.tempFilePaths
        }
        this.setData({
          ["list[" + tidx + "]"]: this.data.list[tidx]
        })
      }
    });
  },
  ViewImage(e) {
    var tidx = e.currentTarget.dataset.tidx || e.currentTarget.dataset.tidx
    wx.previewImage({
      urls: this.data.list[tidx].imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    var index = e.currentTarget.dataset.index || e.currentTarget.dataset.index
    var tidx = e.currentTarget.dataset.tidx || e.currentTarget.dataset.tidx
    wx.showModal({
      title: '召唤师',
      content: '确定要删除这段回忆吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.list[tidx].imgList.splice(index, 1)
          this.setData({
            ["list[" + tidx + "]"]: this.data.list[tidx]
          })
        }
      }
    })
  },
}