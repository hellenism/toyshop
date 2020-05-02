const dataService = require('./dataService');


/**
 * 获取banner信息
 */
const getBanner = () => {
  const oriBanner = dataService.getBanner();
  const bussibanner = oriBanner.map((item) => {
    const bussiItem = {
      oriItem: item,
      imgUrl: item.imgCoverPaths[2],
      id: item.id,
    };
    return bussiItem;
  });
  return bussibanner;
};

/**
 * 获取新品介绍
 */
const getGoodsRecommend = () => {
  const oriNewsetGoods = dataService.getGoodsRecommend();
  const bussiNewsetGoods = oriNewsetGoods.map((item) => {
    const bussiItem = {
      oriItem: item,
      imgUrl: item.imgCoverPaths[1],
      coverImages:item.imgCoverPaths,
      name:'娃娃98K',
      id: item.id,
      price:item.price,
    };
    return bussiItem;
  });
  return bussiNewsetGoods;
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

module.exports = {
  getBanner,
  getGoodsRecommend,
  getCategoryList,
  getListWithCategoryId,
}