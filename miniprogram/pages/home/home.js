// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     novel:[],
     movie:[],
     piece:[],
     video:[],
     currentTab: 0,
     current:0,
     gif:[],
     img:[]
  },
  changeTab: function (e) {
    var id = e.currentTarget.id;
    console.log(e)
    this.setData({ 
      currentTab: id
     
    });
  },
  search: function (e) {
    wx.navigateTo({
      url: '../search/search'
    });
  },
  loadList: function (e) {
    // console.log(e)
    var id = e.currentTarget.dataset.idx;
    // console.log(id)
    // var title = e.currentTarget.dataset.title;
    wx.navigateTo({
      // url: '../video/video?id=' + id + '&title=' + title
      url: '../video/video?id=' + id
    });
    // console.log(list[id])
  },
  loadnovel(e){
    console.log(e)
    var name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: '../novel/novel?name=' + name,
    })
  },
  getnovel(){
    var that = this
    for (var i = 0; i < 10; i++) {
      var list = [];
      wx.request({
        url: 'https://www.apiopen.top/novelApi',
        success: function (res) {
          // console.log(res.data.data)
          list = res.data.data;
          that.setData({
            novel: that.data.novel.concat(list)
          });
          // console.log(list);
        }
      });
    }
  },
  getmovie(){
    var that = this
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      data:{
        city:'广州'
      },
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success:function(res){
        console.log(res.data.subjects)
        that.setData({
          movie:res.data.subjects
        })
      }
    })
  },
  loadmovie(e) {
    console.log(e)
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../movie/movie?id=' + id,
    })
  },
  getvideo(){
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
        // console.log(res.data.result);
        that.setData({
          video: res.data.result
        })
        // console.log(that.data.video)
      }
    })
    
  },
  getpiece(){
     var that = this
     wx.request({
       url: 'https://www.apiopen.top/satinApi?type=2&page=0',
       method: 'GET',
       header: {
         "Content-Type": "json"
       },
       success:function(res){
        //  console.log(res.data)
         that.setData({
            piece:res.data.data
         })
       }
     })
  },
  getgif(){
     var that = this
     wx.request({
       url: 'https://www.apiopen.top/satinGodApi?type=3&page=0',
       method: 'GET',
       header: {
         "Content-Type": "json"
       },
       success: function (res) {
        //  console.log(res.data.data)
         that.setData({
           gif: res.data.data,
          //  img: res.data.data
         })
        //  console.log(that.data.img)
       }
     })
  },
  swiperChange: function (e) {
     this.setData({
       current:e.detail.current
     })
  
     
  },
  next:function(e){
     var that = this
     that.setData({
       current:that.data.current+1<that.data.piece.length ? that.data.current+1:that.data.current
     })

     
     console.log(this.data.current)
  },
  pre: function (e) {
    var that = this
    that.setData({
      current: that.data.current  > 0 ? that.data.current - 1   : that.data.current
    })


    console.log(this.data.current)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getnovel();
    this.getvideo();
    this.getpiece();
    this.getgif(),
    this.getmovie()
    
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