// pages/novel/novel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     list:[],
     more:[]
  },
  getnovel(name){
    var that = this
     wx.request({
       url: 'https://www.apiopen.top/novelInfoApi',
       data:{
         name:name
       },
       success:function(res){
        //  console.log(res.data.data.data)
         that.setData({
           list: res.data.data.aladdin,
           more: res.data.data.data
         })
         console.log(that.data.list)
       }
     })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var name = e.name;
    // console.log(name)
     this.getnovel(name)
    wx.setNavigationBarTitle({
       title: name
    });
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