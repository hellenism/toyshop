Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/miniprogram/pages/toyshopPages/mainPage/mainPage",
      iconPath: "./images/icon_API.png",
      selectedIconPath: "./images/icon_API_HL.png",
      text: "首页"
    }, {
      pagePath: "/index/index2",
      iconPath: "./images/icon_API.png",
      selectedIconPath: "./images/icon_API_HL.png",
      text: "商城"
    },
    {
      pagePath: "/index/index2",
      iconPath: "./images/icon_API.png",
      selectedIconPath: "./images/icon_API_HL.png",
      text: "购物车"
    }, {
      pagePath: "/index/index2",
      iconPath: "./images/icon_API.png",
      selectedIconPath: "./images/icon_API_HL.png",
      text: "个人中心"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})