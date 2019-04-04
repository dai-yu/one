
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    ],
    contentItems: [
      '/images/nature1.jpg',
      '/images/nature2.jpg',
      '/images/nature3.jpg',
      '/images/nature4.jpg'
    ],
    listImage:[
      '/images/nature5.jpg',
      '/images/nature6.jpg',
      '/images/nature7.jpg',
    ]
  },
  im:function(e){
    var that = this;
    wx.chooseImage({
      count: 5,
      success: function(res) {
        that.setData({contentItems:res.tempFilePaths});
      }
    })
  }
})