const goodsItem = {
  imgCoverPaths:['1.jpg','2.jpg'],// 封面图片集合
  imgDetailPaths:['3.jpg','4.jpg','5.jpg'],// 详情图片集合
  detailDescription:['i am desc of 1','i am desc of 2'],// 详情图片对应描述
  summay:'string',// 简介
  price:123,
};

const activityItem = {
  imgCoverPaths:['1.jpg','2.jpg'],// 封面图片集合
  imgDetailPaths:['3.jpg','4.jpg','5.jpg'],// 详情图片集合
  detailDescription:['i am desc of 1','i am desc of 2'],// 详情图片对应描述
  summay:'string',// 简介
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
const getNewsetGoods = () => {

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
  getBanner
}

