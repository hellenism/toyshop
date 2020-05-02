const LOCAL_IMG_PATH = '../../../images/testImages/';

const goodsItem = {
  id: 1,
  imgCoverPaths: [LOCAL_IMG_PATH + '1.jpg', LOCAL_IMG_PATH + '2.jpg', LOCAL_IMG_PATH + '4.jpg'], // 封面图片集合
  imgDetailPaths: [LOCAL_IMG_PATH + '3.jpg', LOCAL_IMG_PATH + '4.jpg', LOCAL_IMG_PATH + '5.jpg'], // 详情图片集合
  detailDescription: ['i am desc of 1', 'i am desc of 2'], // 详情图片对应描述
  summay: 'string', // 简介
  price: 99, // 价格
};

const activityItem = {
  id: 1,
  imgCoverPaths: [LOCAL_IMG_PATH + '1.jpg', LOCAL_IMG_PATH + '2.jpg', LOCAL_IMG_PATH + '4.jpg'], // 封面图片集合
  imgDetailPaths: [LOCAL_IMG_PATH + '3.jpg', LOCAL_IMG_PATH + '4.jpg', LOCAL_IMG_PATH + '5.jpg'], // 详情图片集合
  detailDescription: ['i am desc of 1', 'i am desc of 2'], // 详情图片对应描述
  summay: 'string', // 简介
};


/**
 * 获取banner信息
 */
const getBanner = () => {
  const items = [
    goodsItem,
    goodsItem,
    goodsItem,
    goodsItem,
  ];
  return items;
};

/**
 * 获取新品介绍
 */
const getGoodsRecommend = () => {
  const items = [
    goodsItem,
    goodsItem,
    goodsItem,
    goodsItem,
    goodsItem,
    goodsItem,
    goodsItem,
    goodsItem,
  ];
  return items;
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