// miniprogram/pages/toyshopManager/goods/goodsEditor.js
const bussiService = require('../../../services/bussinessService');
const commonConsts = require('../../../common/commonConsts');
const utils = require('../../../utils/utils');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '我你妈',
    images: [],
    id: 1,
    name: '名称',
    price: 0,
    summary: '简介',
    description: '描述',

    imagesfileID: [],
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

  },

  onBtnClickAddImages() {
    const _this = this;
    wx.chooseImage({
      count: 10,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        console.log('filepath:', tempFilePaths);
        _this.setData({
          images: tempFilePaths
        });
      }
    })
  },

  onBtnClickAdd() {
    console.log('id:', this.data.id);
    console.log('name:', this.data.name);
    console.log('price:', this.data.price);
    console.log('summary:', this.data.summary);
    console.log('description:', this.data.description);

    if (utils.isNumber(this.data.id) === false) {
      wx.showToast({
        title: 'id必须是数字,小老弟！重新填吧！',
        icon: 'success',
        duration: 5000
      });
      return;
    }

    wx.showLoading({
      title: '正在上传图片，表着急...'
    });

    const promisList = [];
    this.data.images.forEach((item) => {
      console.log('image item:', item);

      const promise = new Promise((resolve, reject) => {
        wx.cloud.uploadFile({
          cloudPath: "imgs/" + new Date().getTime() + "-" + Math.floor(Math.random() * 1000), // 上传至云端的路径
          filePath: item, // 小程序临时文件路径
          success: res => {
            console.log(res.fileID);
            this.data.imagesfileID.push(res.fileID);
            resolve();
          },
          fail: err => {
            console.log('err:', err);
            reject();
          }
        });
      });

      promisList.push(promise);
    });

    Promise.all(promisList).then((res) => {

      const param = {
        id: this.data.id,
        name: this.data.name,
        price: this.data.price,
        summary: this.data.summary,
        description: this.data.description,
        images: this.data.imagesfileID
      };

      bussiService.addGoods(param, () => {
        wx.hideLoading();
        wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 5000
        });
      }, () => {
        wx.hideLoading();
        wx.showToast({
          title: '添加失败',
          icon: 'none',
          duration: 5000
        });
      });
    });
  },

  idInput(e) {
    console.log('idInput');
    this.setData({
      id: e.detail.value
    });
  },

  nameInput(e) {
    console.log('nameInput');
    this.setData({
      name: e.detail.value
    });
  },

  priceInput(e) {
    console.log('priceInput');
    this.setData({
      price: e.detail.value
    });
  },

  summaryInput(e) {
    console.log('summaryInput');
    this.setData({
      summary: e.detail.value
    });
  },

  descriptionInput(e) {
    console.log('descriptionInput');
    this.setData({
      description: e.detail.value
    });
  },
})