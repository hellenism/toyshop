const db = wx.cloud.database();
const dataService = require('./dataService');


/**
 * 获取banner信息
 */
const getBanner = (successCb, errorCb) => {
  const dataServiceSuccessCb = (res) => {
    console.log('dataServiceSuccessCb:', res);
    const {
      data
    } = res;
    const bussinessBanner = data.map((item) => {
      const banner = {
        oriItem: item,
        imgUrl: item.images[0],
        id: item.id,
      };
      return banner;
    });
    successCb && successCb(bussinessBanner);
  };

  const dataServiceErrorCb = (error) => {
    console.error('dataServiceErrorCb:', error);
    errorCb && errorCb(error);
  };

  dataService.getBanner(dataServiceSuccessCb, dataServiceErrorCb);
};

/**
 * 获取新品介绍
 */
const getGoodsRecommend = (successCb, errorCb) => {
  const dataServiceSuccessCb = (res) => {
    console.log('dataServiceSuccessCb:', res);
    const {
      data
    } = res;
    const bussinessGoods = data.map((item) => {
      const goods = {
        oriItem: item,
        imgUrl: item.images[0],
        coverImages: item.images,
        name: item.name,
        id: item.id,
        price: item.price,
        summary:item.summary,
        description:item.description
      };
      return goods;
    });
    successCb && successCb(bussinessGoods);
  };

  const dataServiceErrorCb = (error) => {
    console.error('dataServiceErrorCb:', error);
    errorCb && errorCb(error);
  };

  dataService.getGoodsRecommend(dataServiceSuccessCb, dataServiceErrorCb);
};

/**
 * 获取分类列表
 */
const getCategoryList = () => {

};

/**
 * 根据分类id获取分类列表数据
 * @param {*} categoryId 
 */
const getListWithCategoryId = (categoryId) => {

};

//#region 管理员使用
const getGoodsList = () => {

};

const getActivityList = () => {

};

const updateGoodsList = () => {

};

const updateActivtyList = () => {

};

const addGoods = ({
  id,
  name,
  category,
  price,
  summary,
  description,
  images
}, successCb, errorCb) => {
  db.collection('goodsList')
    .add({
      data: {
        id: id,
        name: name,
        category: category,
        price: price,
        summary: summary,
        description: description,
        images: images,
      }
    }).then((res) => {
      successCb && successCb(res);
    }).catch((error)=>{
      errorCb && errorCb(error);
    });
};

const removeGoods = () => {

};

const addActivty = () => {

};

const removeActivty = () => {

};
//#endregion

module.exports = {
  getBanner,
  getGoodsRecommend,
  getCategoryList,
  getListWithCategoryId,

  addGoods,
}