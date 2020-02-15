export default {
  ChooseImage(e) {
    this.beforeClick(e)
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
    this.beforeClick(e)
    wx.previewImage({
      urls: this.getData(e, "imgList"),
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    this.beforeClick(e)
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
  stepper(e) {
    this.beforeClick(e)
    let eventOpts = e.currentTarget.dataset.eventOpts || e.target.dataset.eventOpts || {}
    let value = eventOpts[0] || 0
    let min = eventOpts[1] || 0
    let max = eventOpts[2] || 10
    let step = eventOpts[3] || 1
    let type = eventOpts[4] || ''
    let inputValue = e.detail.value
    let precision = ((value + '.').split('.') || [0, 0])[1].length || 0
    var scale = 1;
    // 浮点型
    if (~~step !== step) {
      scale = Math.pow(10, (step + '').split('.')[1].length);
    }
    step = step * scale;
    value = scale * value;
    min = scale * min;
    max = scale * max;
    if (type === 'minus') {
      value -= step;
      value = parseFloat(value / scale).toFixed(precision)
    } else if (type === 'plus') {
      value += step;
      value = parseFloat(value / scale).toFixed(precision)
    } else if (type === 'input') {
      // mark 不支持input等原生组件兼容
      e.mark = {
        tindex: e.currentTarget.dataset.tindex || e.target.dataset.tindex,
        route: e.currentTarget.dataset.route || e.target.dataset.route
      }
      if (inputValue + '' != inputValue) {
        value = scale * inputValue;
      } else {
        value = inputValue
      }
    }
    if (value < min || value > max) {
      return;
    }
    this.renderData(e, {
      value: value
    })
  },
  clickRate(e) {
    this.beforeClick(e)
    let index = e.currentTarget.dataset.index || e.target.dataset.index || 0
    this.renderData(e, {
      value: index + 1
    })
  },
}