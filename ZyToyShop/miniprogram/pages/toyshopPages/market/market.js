// miniprogram/pages/toyshopPages/market/market.js
const bussiService = require('../../../services/bussinessService');
const commonConsts = require('../../../common/commonConsts');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ["玩具", "文具", "母婴"],
    goodsCurrent: [], // 推荐商品
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('market');
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
    // 获取推荐信息
    const newsetGoods = bussiService.getGoodsRecommend();
    this.setData({
      goodsCurrent: newsetGoods,
    });
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

  },
  
  tabClick(e) {
    console.log(e.detail.index);
  },
})