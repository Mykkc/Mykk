const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Mykk",
  description: "Front end rookie",
  // base:'./',
  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
    },
    // "/": {
    //   title: "Theme Demo",
    //   description: "vuepress-theme-hope 的 demo",
    // },
  },

  themeConfig: {
    logo: "/logo.svg",
    hostname: "http://mykkk.cn",
    bgImage:'/doc/img/bg.jpg',
    author: "Mykk",
    nav: [
      { text: "首页", link: "/", icon: "home" },
      { text: "我还没想好", link: "/www/", icon: "mark" },
      {
        text: "如何使用",
        icon: "react",
        link: "/intro/",
      },
      {
        text: "关于我",
        icon: "call",
        link: "/intro/",
      }
    ],
    themeColor :false,
    darkmode :'auto-switch',
    sidebar: [
        '/',
        {
          title:'JS',
          icon: "javascript",
          prefix: "/js/",
          collapsable:true,
          children: [
            ''
          ],
        },
        {
          title:'Vue',
          icon: "vue",
          prefix: "/vue/",
          collapsable:true,
          children: [
            ''
          ],
        },
        {
          title:'React',
          icon: "react",
          prefix: "/react/",
          collapsable:true,
          children: [
            ''
          ],
        },
        {
          title:'html',
          icon: "html",
          prefix: "/html/",
          collapsable:true,
          children: [
            ''
          ],
        },
        {
          title:'css',
          icon: "css",
          prefix: "/css/",
          collapsable:true,
          children: [
            'scss'
          ],
        },
        {
          title:'TS',
          icon: "typescript",
          prefix: "/ts/",
          collapsable:true,
          children: [
            ''
          ],
        },
        {
          title: "MarkDown",
          icon: "creative",
          prefix: "/base/",
          collapsable:true,
          children: [
            "markdown",
            {
              title:'emoji',
              icon:'emoji',
              children:["site", "nature", "people"]
            }
          ],
        },
    ],

    // locales: {
    //   "/zh/": {
    //     nav: [
    //       { text: "博客主页", link: "/zh/", icon: "home" },
    //       { text: "项目主页", link: "/zh/home/", icon: "home" },
    //       {
    //         text: "如何使用",
    //         icon: "creative",
    //         link: "/zh/guide/",
    //       },
    //       {
    //         text: "主题文档",
    //         icon: "note",
    //         link: "https://vuepress-theme-hope.github.io/zh/",
    //       },
    //     ],
    //     sidebar: {
    //       "/zh/": [
    //         "",
    //         "home",
    //         "slides",
    //         {
    //           title: "如何使用",
    //           icon: "creative",
    //           prefix: "guide/",
    //           children: ["", "page", "markdown", "disable", "encrypt"],
    //         },
    //       ],
    //     },
    //   },
    // },

    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      // links: {
      //   Zhihu: "https://zhihu.com",
      //   Baidu: "https://baidu.com",
      //   Github: "https://github.com",
      // },
    },

    footer: {
      display: true,
      content: "我是捣乱的",
    },
    comment: {
      type: "valine",
      appId: "Ml7e4GwrWIxeEMx1NAp1z5Ql-gzGzoHsz",
      appKey: "INNATLlGX5t8LODEVnuC47yd",
    },

    copyright: true,

    git: {
      contributor:false
    },

    mdEnhance: {
      enableAll: true,
      demo:true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },
    feed:false,
    pwa:false
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cachePic: true,
    //   apple: {
    //     icon: "/favicon.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/favicon.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/favicon.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "favicon.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/favicon.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/favicon.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Guide",
    //         short_name: "Guide",
    //         url: "/guide/",
    //         icons: [
    //           {
    //             src: "/favicon.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //           {
    //             src: "/favicon.png",
    //             sizes: "192x192",
    //             purpose: "monochrome",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
