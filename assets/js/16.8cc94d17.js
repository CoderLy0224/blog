(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{410:function(s,a,n){"use strict";n.r(a);var e=n(1),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("这几天"),a("a",{attrs:{href:"https://juejin.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("掘金社区"),a("OutboundLink")],1),s._v("好文章很多，有点眼花缭乱，各种点赞收藏，收藏了就是会了。")]),s._v(" "),a("p",[s._v("简单的记录一下从零到成功发布npm组件包，为什么选择拖拽组件,也许是最近点赞和收藏了"),a("a",{attrs:{href:"https://juejin.cn/user/764915822103079",target:"_blank",rel:"noopener noreferrer"}},[s._v("阿宝哥"),a("OutboundLink")],1),s._v("的"),a("a",{attrs:{href:"https://juejin.cn/post/6984587700951056414",target:"_blank",rel:"noopener noreferrer"}},[s._v("拖拽竟然还能这样玩！"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9934ab002c9745e8813d3c690dff684f~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),s._v(" "),a("p",[s._v("回归本文：下面开始演示我从零创建项目，到发布该项目，并附上代码")]),s._v(" "),a("h3",{attrs:{id:"vite-快速构建-vue-新项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vite-快速构建-vue-新项目"}},[s._v("#")]),s._v(" Vite 快速构建 Vue 新项目")]),s._v(" "),a("p",[s._v("首先使用vite-app去搭建一个最简单的轻型项目")]),s._v(" "),a("h4",{attrs:{id:"使用npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用npm"}},[s._v("#")]),s._v(" 使用npm")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm init vite-app <project-name>\ncd <project-name>\nnpm install\nnpm run dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"或使用yarn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#或使用yarn"}},[s._v("#")]),s._v(" 或使用yarn")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yarn create vite-app <project-name>\ncd <project-name>\nyarn\nyarn dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"成功安装依赖并运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#成功安装依赖并运行"}},[s._v("#")]),s._v(" 成功安装依赖并运行")]),s._v(" "),a("p",[s._v("项目构建好，安装依赖并运行，如下：\n"),a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b07f0cccc6c8432f96efb8afe944c570~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),s._v(" "),a("h3",{attrs:{id:"写个组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写个组件"}},[s._v("#")]),s._v(" 写个组件")]),s._v(" "),a("p",[s._v("这步是写一个你想发布的组件。")]),s._v(" "),a("h4",{attrs:{id:"项目目录介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目目录介绍"}},[s._v("#")]),s._v(" 项目目录介绍")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("├── src\n│ ├── assets # 本地静态资源（一个vue的logo，可以删除）\n│ ├── components # 业务通用组件\n│ │ ├── VueXiaoerDragEle.vue # 本文需要封装的拖拽组件\n│ │ ├── VueXiaoerDragEle.css # 本文需要封装的拖拽组件的样式\n│ ├── utils # 工具库（封装的工具，比如添加事件函数和删除事件函数，和一些计算高宽的函数）\n│ └── index.css # 主页样式\n| └── APP.vue # 主页\n| └── main.js # 应用入口\n├── .npmignore // 用于忽略不需要上传到npm的文件\n├── README.md\n└── package.json # 项目配置\n\n\n// 注意\n# utils 文件夹一般存放的是你组件经常使用的一些工具函数\n# assets 文件夹一般存放的是你组件用到的样式、图片、icon等静态资源\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h5",{attrs:{id:"组件中鼠标按下处理函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件中鼠标按下处理函数"}},[s._v("#")]),s._v(" 组件中鼠标按下处理函数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    handleDown (handle, e) {\n      if (e instanceof MouseEvent && e.which !== 1) {\n        return\n      }\n\n      if (this.onResizeStart(handle, e) === false) {\n        return\n      }\n\n      if (e.stopPropagation) e.stopPropagation()\n\n      // Here we avoid a dangerous recursion by faking\n      // corner handles as middle handles\n      if (this.lockAspectRatio && !handle.includes('m')) {\n        this.handle = 'm' + handle.substring(1)\n      } else {\n        this.handle = handle\n      }\n\n      this.resizing = true\n      this.mouseClickPosition.mouseX = e.touches ? e.touches[0].pageX : e.pageX\n      this.mouseClickPosition.mouseY = e.touches ? e.touches[0].pageY : e.pageY\n      this.mouseClickPosition.left = this.left\n      this.mouseClickPosition.right = this.right\n      this.mouseClickPosition.top = this.top\n      this.mouseClickPosition.bottom = this.bottom\n      this.mouseClickPosition.w = this.width\n      this.mouseClickPosition.h = this.height\n\n      this.bounds = this.calcResizeLimits()\n\n      addEvent(document.documentElement, eventsFor.move, this.handleResize)\n      addEvent(document.documentElement, eventsFor.stop, this.handleUp)\n    },\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])]),a("h5",{attrs:{id:"组件中鼠标松开处理函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件中鼠标松开处理函数"}},[s._v("#")]),s._v(" 组件中鼠标松开处理函数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  async handleUp (e) {\n      this.handle = null\n\n      // 初始化辅助线数据\n      const temArr = new Array(3).fill({ display: false, position: '', origin: '', lineLength: '' })\n      const refLine = { vLine: [], hLine: [] }\n      for (let i in refLine) { refLine[i] = JSON.parse(JSON.stringify(temArr)) }\n\n      if (this.resizing) {\n        this.resizing = false\n        await this.conflictCheck()\n        this.$emit('refLineParams', refLine)\n        this.$emit('resizestop', this.left, this.top, this.width, this.height)\n      }\n      if (this.dragging) {\n        this.dragging = false\n        await this.conflictCheck()\n        this.$emit('refLineParams', refLine)\n        this.$emit('dragstop', this.left, this.top)\n      }\n      this.resetBoundsAndMouseState()\n      removeEvent(document.documentElement, eventsFor.move, this.handleResize)\n    },\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h5",{attrs:{id:"组件中移动的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件中移动的实现"}},[s._v("#")]),s._v(" 组件中移动的实现")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    // 元素移动\n    async handleDrag  (e) {\n      const axis = this.axis\n      const grid = this.grid\n      const bounds = this.bounds\n      const mouseClickPosition = this.mouseClickPosition\n\n      const tmpDeltaX = axis && axis !== 'y' ? mouseClickPosition.mouseX - (e.touches ? e.touches[0].pageX : e.pageX) : 0\n      const tmpDeltaY = axis && axis !== 'x' ? mouseClickPosition.mouseY - (e.touches ? e.touches[0].pageY : e.pageY) : 0\n\n      const [deltaX, deltaY] = snapToGrid(grid, tmpDeltaX, tmpDeltaY, this.scaleRatio)\n\n      const left = restrictToBounds(mouseClickPosition.left - deltaX, bounds.minLeft, bounds.maxLeft)\n      const top = restrictToBounds(mouseClickPosition.top - deltaY, bounds.minTop, bounds.maxTop)\n      if (this.onDrag(left, top) === false) {\n        return\n      }\n      const right = restrictToBounds(mouseClickPosition.right + deltaX, bounds.minRight, bounds.maxRight)\n      const bottom = restrictToBounds(mouseClickPosition.bottom + deltaY, bounds.minBottom, bounds.maxBottom)\n      this.left = left\n      this.top = top\n      this.right = right\n      this.bottom = bottom\n\n      await this.snapCheck()\n      this.$emit('dragging', this.left, this.top)\n    },\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://gitee.com/wangxiaoer520/vue-xiaoer-drag-ele",target:"_blank",rel:"noopener noreferrer"}},[s._v("项目代码地址"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"发包前配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发包前配置"}},[s._v("#")]),s._v(" 发包前配置")]),s._v(" "),a("p",[s._v("npm发布前两步走，1.暴露组件；二：打包配置")]),s._v(" "),a("h4",{attrs:{id:"_1-暴露组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-暴露组件"}},[s._v("#")]),s._v(" 1.暴露组件")]),s._v(" "),a("p",[s._v("新建个index.js，然后里面写上导出之前的组件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import './components/VueXiaoerDragEle.css'\n\nimport VueXiaoerDragEle from './components/VueXiaoerDragEle'\n\nexport function install(Vue) {\n  if (install.installed) return\n  install.installed = true\n  Vue.component('VueXiaoerDragEle', VueXiaoerDragEle)\n}\n\nconst plugin = {\n  install\n}\n\nlet GlobalVue = null\nif (typeof window !== 'undefined') {\n  GlobalVue = window.Vue\n} else if (typeof global !== 'undefined') {\n  GlobalVue = global.Vue\n}\nif (GlobalVue) {\n  GlobalVue.use(plugin)\n}\n\nexport default VueXiaoerDragEle\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h4",{attrs:{id:"二-使用vue-cli的vue-cli-service-build打包命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-使用vue-cli的vue-cli-service-build打包命令"}},[s._v("#")]),s._v(" 二.使用vue-cli的vue-cli-service build打包命令")]),s._v(" "),a("p",[s._v("这里也可以选择rollup去配置打包(这里省略了)\n安装vue-cli后，加上打包配置，打包入口指向上一步的index.js")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' "build": "vue-cli-service build --target lib --name VueXiaoerDragEle ./src/index.js"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ecbf965e47e4910a825ed18c74cf77c~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),s._v(" "),a("p",[s._v("到这，发包前配置就完成了，下面开始说发布的步骤")]),s._v(" "),a("h3",{attrs:{id:"npm发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm发布"}},[s._v("#")]),s._v(" npm发布")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm"),a("OutboundLink")],1),s._v("发包步骤：")]),s._v(" "),a("h4",{attrs:{id:"注册账号-已有跳过"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册账号-已有跳过"}},[s._v("#")]),s._v(" 注册账号(已有跳过)")]),s._v(" "),a("p",[s._v("需要npm账号，没有的话去"),a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1),s._v("注册一个，等等发包需要账号登录的")]),s._v(" "),a("h4",{attrs:{id:"镜像源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像源"}},[s._v("#")]),s._v(" 镜像源")]),s._v(" "),a("p",[s._v("发包需要使用官网的镜像源，如果是淘宝等其他镜像源，需要改成官网的镜像源：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm config set registry http://registry.npmjs.org\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录"}},[s._v("#")]),s._v(" 登录")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm login\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("依次输入用户名，密码，邮箱\n"),a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6225ce39bf6d4f0ea86c3ea7a08fedcb~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}}),s._v("\n成功的话有提示，然后下一步")]),s._v(" "),a("h4",{attrs:{id:"发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[s._v("#")]),s._v(" 发布")]),s._v(" "),a("p",[s._v("发包就一个简单的命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm publish\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("成功发布如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8fa86621f42e4dd4addd729a3b28be10~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),s._v(" "),a("h3",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),a("p",[s._v("我们刚刚成功发布了vue-xiaoer-drag-ele组件，")]),s._v(" "),a("h4",{attrs:{id:"查看组件npm官网的仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看组件npm官网的仓库"}},[s._v("#")]),s._v(" 查看组件npm官网的仓库")]),s._v(" "),a("p",[s._v("这是"),a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm官网"),a("OutboundLink")],1),s._v("用你刚刚使用的账号登录的仓库(profile)管理,可以看见你的包列表。比如我这个账号发了两个包，时间、包名等等：\n"),a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7dd25f7dc99448b9b84e60929f8d3a5f~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),s._v(" "),a("h4",{attrs:{id:"使用该依赖包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用该依赖包"}},[s._v("#")]),s._v(" 使用该依赖包")]),s._v(" "),a("p",[s._v("在别的项目中安装该依赖包\n然后导入使用;")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a19e97671a6f4a688a94dd976460c432~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),s._v(" "),a("p",[s._v("到这，就完成了从零到发包了。")]),s._v(" "),a("p",[s._v("PS: 换回国内镜像")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm config set registry https://registry.npm.taobao.org\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("键盘在手，跟我走，轻轻松松发布一个属于你自己的组件。")]),s._v(" "),a("p",[a("strong",[s._v("！十分感谢你认真的看完")])]),s._v(" "),a("p",[a("code",[s._v("不妨点个赞，鼓励一下楼主，谢谢！")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/769196faea3645d09a07d4e87caaccdd~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/10d0922258614595808ae464a87149b4~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})])])}),[],!1,null,null,null);a.default=t.exports}}]);