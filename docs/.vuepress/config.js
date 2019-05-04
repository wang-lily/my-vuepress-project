module.exports = {
  title: "我的博客",
  description: "我的名字",
  themeConfig: {
    // navbar: false,// 禁用导航栏
    nav: [
      { text: "首页", link: "/" },
      {
        text: "项目展示",
        items: [
          //   { text: "汽车", link: "/car" },
          //   { text: "房产", link: "/house" },
          //   { text: "购物", link: "/shopping" },
          //   { text: "养生", link: "/care" },
          { text: "美容", link: "/beautiful" },
          {
            text: "Group1",
            items: [
              { text: "汽车", link: "/car" },
              { text: "房产", link: "/house" } //访问house.html
            ]
          },
          {
            text: "Group2",
            items: [
              { text: "购物", link: "/shopping" },
              { text: "养生", link: "/care" },
              { text: "美容", link: "/beautiful" }
            ]
          }
        ]
      },
      { text: "关于我们", link: "/about_us/" }, //访问about_us路由
      { text: "帮助中心", link: "https://google.com" }
    ],
    // sidebar: 'auto'
    sidebar: [
        '/',
        '/about_us/',
        '/css/',
        ['/javascript/','js']
    ]
  }
};
