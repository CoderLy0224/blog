---
title: vue双向绑定
date: 2022-08-8
categories:
 - vue
tags:
 - vue
sidebar: 'auto'
---

---

theme: channing-cyan
---

### vue双向绑定

  实现双向绑定：

#### 第一步

- 要对数据进行监听和劫持--》用到object.defineproperty()中的get和set方法，需要observer（监听器）（劫持数据，获取数据） 监听属性，如果属性发生变化，通知所有的watcher(订阅者)属性要更新

#### 第二步

- 因为watcher有多个 需要Dep(订阅器)来专门搜集订阅者，实现observer和watcher之间统一管理

#### 第三步

- 需要编写compile（有文档碎片，会在内存开辟空间，将所有的属性节点，添加到内存中） 对每个元素进行解析，将相关的指令对应初始化成一个watcher，并且替换模板数据和绑定相关的数据，此时当watcher接收到相应属性变化，就会执行更新函数，从而更新视图，实现双向绑定
