const sidebar = require('./siderbar.js');
module.exports = {
  "title": "小洋博客",
  "description": "行则不惧行而不缀行则将至",
  "dest": "dist",
  "base":"/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "1000591.jpg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "plugins": ["@vuepress-reco/vuepress-plugin-comments", "vuepress-plugin-meting",'@vuepress/active-header-links',
  [
    'ribbon',
    {
       size: 90, // 彩带的宽度，默认为 90
       opacity: 0.8, // 彩带的不透明度，默认为 0.3
       zIndex: -1, // 彩带的 z-index 属性，默认值为 -1
    },
  ],
  
  [
  'dynamic-title',
    {
     showIcon: '/favicon.ico',
     showText: '(/≧▽≦/)咦！又好了！',
     hideIcon: '/failure.ico',
     hideText: '(●—●)喔哟，崩溃啦！',
     recoverTime: 2000,
    },
  ],
  [
    'cursor-effects',
    {
       size: 3, // 粒子大小
       shape: 'star', // 粒子形状（可选 'star' 和 'circle'）
       zIndex: 999999999,
    },
 ],
  ],
  "theme": "reco",
  "themeConfig": {
    "type":"blog",
    "mode": 'dark',
    "subSidebar": 'auto',
    "valineConfig": {
      "appId": 'aCSipIDPBNQTreNNNr4bT5R4-gzGzoHsz',
      "appKey": 'zuQELzuRINaCxHgIozNrnwKO',
    },
    "nav": [
      {
        "text": "小羊主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      { "text": '留言板', "link": '/blogs/views/messageBoard.html', "icon": 'reco-suggestion' },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "Gitee",
            "link": "https://gitee.com/dlly123",
            "icon": "reco-mayun"
          }
        ]
      },
    ],
    sidebar,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "目录索引"
      },
      "tag": {
        "location": 3,
        "text": "标签索引"
      }
    },
    "friendLink": [
      {
        "title": "LY",
        "desc": "越努力,越热爱,越幸运",
        "email":"2213827035@qq.com",
        "avatar": "./public/1000649.jpg",
        "link": "https://gitee.com/dlly123"
      }
    ],
    "logo": "1000755.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "xiaoyang",
    "authorAvatar": "./public/1000791.jpg",
    "record": "首页",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}

