// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      detail:[],
      casts:[],
      writers:[],
      reviews:[],
      comments:[],
      photos:[]
  },
  getmovie(id){
    var that = this
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/'+id,
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success:function(res){
        console.log(res.data.casts)
        
        console.log(res.data)
        that.setData({
          detail: res.data,
          casts: res.data.casts,
          writers:res.data.writers,
          reviews:res.data.popular_reviews,
          comments:res.data.popular_comments,
          photos:res.data.photos
        })
        console.log(that.data.reviews)
        console.log(that.data.comments)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
     var id = e.id
     this.getmovie(id)
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