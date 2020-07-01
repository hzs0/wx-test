// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotSearch: [
      { name: "斗罗大陆" },
      { name: "比悲伤更悲伤的故事" },
      { name: "大侦探皮卡丘" },
      { name: "盗墓笔记" },
   
    ],
  },
  getInput: function (e) {
    this.setData({ search: e.detail.value });
  },
  empty: function (e) {
    this.setData({ searchInput: "" });
  },
  searchMenu: function (e) {
    console.log(this.data.search);
    var name = this.data.search;
    wx.navigateTo({
      url: '../searchnovel/searchnovel?name=' + name
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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