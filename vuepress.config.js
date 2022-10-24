import { defineUserConfig, defaultTheme } from 'vuepress';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'A-FRAME',
  description: 'A-Frame 中文文档',

  head: [['link', { rel: 'icon', href: 'https://aframe.io/images/aframe-logo-192.png' }]],

  port: 10004,

  theme: defaultTheme({
    repo: 'kevinzhao2233/aframe-docs-cn',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    // custom containers
    tip: '提示',
    warning: '注意',
    danger: '警告',
    // 404 page
    notFound: ['这里什么都没有', '我们怎么到这来了？', '这是一个 404 页面', '看起来我们进入了错误的链接'],
    backToHome: '返回首页',
    // a11y
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
    // 默认主题配置
    navbar: [
      {
        text: '起步',
        link: '/introduction/',
      },
      {
        text: '指南',
        link: '/guides/building-a-basic-scene',
      },
    ],

    sidebar: [
      {
        text: '起步',
        link: '/introduction/',
        children: [
          '/introduction/index.md',
          '/introduction/installation.md',
          '/introduction/vr-headsets-and-webxr-browsers.md',
          '/introduction/html-and-primitives.md',
          '/introduction/entity-component-system.md',
          '/introduction/javascript-events-dom-apis.md',
          '/introduction/developing-with-threejs.md',
          '/introduction/writing-a-component.md',
          '/introduction/interactions-and-controllers.md',
          '/introduction/models.md',
          '/introduction/visual-inspector-and-dev-tools.md',
          '/introduction/hosting-and-publishing.md',
          '/introduction/best-practices.md',
          '/introduction/faq.md',
        ],
      },
      {
        text: '指南',
        link: '/guides/',
        children: [
          '/guides/building-a-basic-scene.md',
          // '/guides/building-a-360-image-gallery.md',
          // '/guides/building-a-minecraft-demo.md',
        ],
      },
    ],
  }),
});
