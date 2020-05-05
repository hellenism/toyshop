// miniprogram/pages/toyshopPages/mainPage/mainPage.js

const bussiService = require('../../../services/bussinessService');
const commonConsts = require('../../../common/commonConsts');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent: 0, //当前banner所在位置
    bannerList: [],
    goodsRecommend: [], // 推荐商品
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('mainPage');
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
    // 获取banner信息
    bussiService.getBanner((banner) => {
      this.setData({
        bannerList: banner,
      });
    }, (error) => {
      console.error('bussiService getBanner error:', error);
    });

    // 获取推荐信息
    bussiService.getGoodsRecommend((goods) => {
      this.setData({
        goodsRecommend: goods,
      });
    }, (error) => {
      console.error('bussiService getGoodsRecommend error:', error);
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

  /**
   * banner滚动事件
   * @param {*} e 
   */
  swiperchange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  /**
   * 详情列表点击
   * @param {*} e 
   */
  toDetailsTap: function (e) {
    console.log('toDetailsTap', e);
    const currentRecommandItemId = e.currentTarget.dataset.id;
    const currentRecommandItem = this._getGoodsRecommendItemWithId(currentRecommandItemId);
    wx.setStorage({
      key: commonConsts.KEY_CURRENT_RECOMMAND_ITEM,
      data: currentRecommandItem
    });
    wx.navigateTo({
      url: "../goodsDetail/goodsDetail?id=" + currentRecommandItemId
    });
  },

  _getGoodsRecommendItemWithId(id) {
    const filterResult = this.data.goodsRecommend.filter((item, index) => {
      return item.id === id;
    });
    return filterResult.length > 0 ? filterResult[0] : null;
  }
})