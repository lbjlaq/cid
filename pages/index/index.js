//项目源码：https://github.com/lbjlaq/cid
var url = '#' //请关注公众号“ctrler” 回复CID获取最新api接口
Page({
  data: {},
  formSubmit: function (e) {
    var that = this
    wx.request({
      url: url,
      data: {
        'id': e.detail.value.id,
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res){
        console.log(res.data);
        that.setData({ 
          postList: res.data, 
        });
        
      },


    })

  },
  onClick: function (e) {
    var that = this;
    wx.setClipboardData({
      //准备复制的数据
      data: that.data.postList,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
  }
  
})
