// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     video:[],
    //  title:'',
  },
  getvideo:function(id){
    var that = this
    wx.request({
      url: 'https://api.apiopen.top/todayVideo',
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        // var subjects = res.data.subjects;
        // var size = subjects.length;
        // var len = parseInt(size/2);
        // console.log(res.length);
        that.setData({
          video: res.data.result[id]
          // title: res.data.result[id].data.content.data.slogan
        })
        // console.log(res.data.result[id].data.content.data.slogan)
        // var title = that.data.title
        // // console.log(title);
        // wx.setNavigationBarTitle({
        //   title: title,
        // })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
   
    this.getvideo(e.id);
    
  }, 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})