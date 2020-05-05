// miniprogram/pages/toyshopPages/goodsDetail/goodsDetail.js

const commonConsts = require('../../../common/commonConsts');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverImages: [],
    detailImages: [],
    name: '',
    price: 0,
    description: ''
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
    const currentItem = wx.getStorageSync(commonConsts.KEY_CURRENT_RECOMMAND_ITEM);

    this.setData({
      coverImages: currentItem.coverImages,
      detailImages: currentItem.detailImages,
      name: currentItem.name,
      price: currentItem.price,
      description: currentItem.description,
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

  onAddCart() {
    console.log('onAddCart');
  },

  onBuy() {
    console.log('onBuy');
  },
})