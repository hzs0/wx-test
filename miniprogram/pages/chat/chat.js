const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    tittle: "陪聊",
    syas: [{
      'robot': '性感渣女，在线陪聊！'

    }
    ],
    headLeft: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558508392&di=e74000f9a71d4075a9892fc98c7d15b4&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201702%2F01%2F20170201093657_Jkvys.jpeg',
    headRight: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2750514930,1986749959&fm=26&gp=0.jpg',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    let that = this
    wx.getUserInfo({
      success: function (e) {
        let header = e.userInfo.avatarUrl
        that.setData({
          headRight: header
        })
      }
    })

  },


  converSation: function (e) {
    let that = this
    var obj = {},
      isay = e.detail.value.says,
      syas = that.data.syas,
      length = syas.length,
      key = '1329941889e74f1b91bc946a052d3a23'//这里填入你得到的图灵机器人的apikey

    console.log(length)
    wx.request({
      url: 'http://www.tuling123.com/openapi/api?key=' + key + '&info=' + isay,
      success: function (res) {
        let tuling = res.data.text;
        obj.robot = tuling;
        obj.isay = isay;
        syas[length] = obj;
        that.setData({
          syas: syas
        })
      }
    })


  },
  delectChat: function () {
    let that = this
    that.setData({
      syas: []
    })
  }

})