// miniprogram/pages/toyshopPages/goodsDetail/goodsDetail.js

const commonConsts = require('../../../common/commonConsts');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverImages: [],
    detailImages: [],
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

    // 适配逻辑
    const coverImages = currentItem.oriItem.imgCoverPaths.map((item) => {
      return '../../' + item;
    });

    const detailImages = currentItem.oriItem.imgDetailPaths.map((item) => {
      const image = {
        imgUrl: item
      };
      return image;
    });

    this.setData({
      coverImages: coverImages,
      detailImages: detailImages
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

  }
})