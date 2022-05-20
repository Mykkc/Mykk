const { hopeTheme  } = require("vuepress-theme-hope");

module.exports = {
  title: "Mykk",
  description: "Front end rookie",
  // base:'./',
  dest: "./dist",
  lang: 'zh-CN',
  theme: hopeTheme({
    logo: "/logo.png",
    hostname: "http://mykkk.cn",
    bgImage:'/doc/img/bg.jpg',
    author: "Mykk",
    themeColor :false,
    darkmode: 'toggle',
    fullscreen:false,
    navbar: [
      { text: "首页", link: "/", icon: "home" },
      {
        text: "如何使用",
        icon: "react",
        link: "/intro/",
      },
      {
        text: "关于我",
        icon: "call",
        link: "/about",
      }
    ],
    iconPrefix:'fas fa-',
    sidebar:'structure',
    plugins: {
      mdEnhance: {
        enableAll: false,
        demo: true,
        flowchart:true,
        presentation: false,
        tasklist:true

      }, 
      git: {
        contributor: false,
        editLink:false
      },
      blog: {
        intro:'/about'
      },
      copyright: true,
      footer: {
        display: true,
        content: "风不会停息",
      },
    }
  }),
};
