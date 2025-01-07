import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/cw-docs',
  lang: "zh",
  title: "Class Widgets",
  description: "全新桌面课表",
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/cw-docs/favicon.ico' }],
    //<meta name="msvalidate.01" content="7CFDD34AD7AA7DA98137713E6A298EE1" />
    ['meta', { name: 'msvalidate.01', content: '7CFDD34AD7AA7DA98137713E6A298EE1' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-1Z43N82SJ7' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-1Z43N82SJ7');`
    ]
  ],
  sitemap: {
    hostname: String(process.env.HOSTNAME)
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/Logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
      { text: '快速上手', link: '/guide/install' },
      { text: '进阶配置', link: '/advanced' },
      { text: '开发', link: '/dev' },
      { text: '社区', link: '/community' }
    ],

    sidebar: {
      '/about': [
        {
          text: '关于 Class Widgets',
          link: '/about'
        },
        {
          text: '指南',
          link: '/guide/install'
        }
      ],
      '/guide/': [
        {
          text: '快速上手',
          items: [
            {
              text: '安装',
              link: '/guide/install'
            },
            {
              text: '课程表',
              items: [
                {
                  text: '课程表文件',
                  link: '/guide/schd/schdfile',
                },
                {
                  text: '时间线',
                  link: '/guide/schd/timeline',
                },
                {
                  text: '课程表',
                  link: '/guide/schd/schdule',
                },
                {
                  text: '调休 换课',
                  link: '/guide/schd/schdswap',
                },
              ]
            }
          ]
        }
      ],
      '/advanced': [
        {
          text: '进阶配置',
          link: '/advanced/',
          items: [
            {
              text: '个性化',
              link: '/advanced/customize/',
              items: [
                {
                  text: '天气 & API Key',
                  link: '/advanced/customize/weather-api'
                },
                {
                  text: '主题',
                  link: '/advanced/customize/theme'
                },
              ]
            },
            {
              text: '上下课提醒',
              link: '/advanced/notification'
            },
            {
              text: '插件',
              link: '/advanced/extension'
            }
          ]
        }
      ],
      '/dev': [
        {
          text: '开发文档',
          link: '/dev/',
          items: [
            {
              text: '软件主体',
              link: '/dev/app'
            },
            {
              text: '软件插件',
              link: '/dev/extension'
            },
            {
              text: '软件主题',
              link: '/dev/theme'
            }
          ]
        }
      ],
      '/community': [
        {
          text: '社区',
          items: [
            {
              text: '社区',
              link: '/community'
            },
            {
              text: '社区规范',
              link: '/community/rules/',
              items: [
                {
                  text: '提问的智慧',
                  link: '/community/rules/How-To-Ask-Questions-The-Smart-Way'
                }
              ]
            }
          ]
        }
      ]

    },
    editLink: {
      pattern: 'https://github.com/xuanxuan1231/cw-docs/edit/main/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '<strong>非官方</strong>的文档。部分图片来自 <a href=https://github.com/RinLit-233-shiroko>RinLit-233-shiroko</a>。<br>文档仓库位于 <a href=https://github.com/xuanxuan1231/cw-docs>xuanxuan1231/cw-docs</a>',
      //copyright: `版权所有 © 2019-${new Date().getFullYear()} 尤雨溪`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航',
      //level: ['2']
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',


    socialLinks: [
      //{ icon: {svg: '<svg id="bilibili-svgrepo-com_-_Copy" data-name="bilibili-svgrepo-com - Copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="Path_16" data-name="Path 16" d="M0,0H24V24H0Z" fill="none"/><path id="Path_17" data-name="Path 17" d="M18.223,3.086a1.25,1.25,0,0,1,0,1.768L17.08,6h1.17A3.75,3.75,0,0,1,22,9.747v7.5A3.75,3.75,0,0,1,18.25,21H5.75A3.75,3.75,0,0,1,2,17.247v-7.5A3.75,3.75,0,0,1,5.75,6H6.916L5.775,4.855A1.25,1.25,0,1,1,7.542,3.087l2.652,2.652a1.235,1.235,0,0,1,.2.257h3.213a1.22,1.22,0,0,1,.2-.258l2.651-2.652a1.25,1.25,0,0,1,1.768,0Zm.027,5.42H5.75A1.25,1.25,0,0,0,4.5,9.663l0,.094v7.5A1.249,1.249,0,0,0,5.657,18.5l.093,0h12.5A1.25,1.25,0,0,0,19.5,17.35l0-.093v-7.5a1.25,1.25,0,0,0-1.25-1.25Zm-10,2.5a1.25,1.25,0,0,1,1.25,1.25v1.25a1.25,1.25,0,1,1-2.5,0v-1.25A1.25,1.25,0,0,1,8.25,11.006Zm7.5,0A1.25,1.25,0,0,1,17,12.256v1.25a1.25,1.25,0,1,1-2.5,0v-1.25A1.25,1.25,0,0,1,15.75,11.006Z" fill="#fff"/></svg>'}, link: 'https://www.bilibili.com/video/BV1xwW9eyEGu' },
      { icon: 'github', link: 'https://github.com/Class-Widgets/Class-Widgets' }
    ]
  }
})
