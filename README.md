# vue-ca

> Vue权限控制

## 主要思路
# 登录的时候 获取菜单数组 缓存到sessionStorage （其实这一块应该是从后台获取实事更新更加合理一些，现先一步步来，基本原理懂了，其他的都好办）
# 然后处理菜单数组中的component字段，合成如下数组 这里为什么合成呢？ 为什么不按照下面的格式直接给？那样我们前端用起来更方便的吧！ 原因是：下面的路由数组存到sessionStorage的时候component就没有了。为什么？我也不知道！！！
<!--
  [
    {
      path: '/',
      name: 'index',
      component: (resolve) => require(['../views/index.vue'], resolve)
    },
    {
      path: '/u',
      name: 'me',
      component: (resolve) => require(['../views/u.vue'], resolve)
    }, {
      path: '/me',
      name: 'me',
      component: (resolve) => require(['../views/me.vue'], resolve)
    }
    ]
-->
# 处理方式见login组件

# 接下来就是刷新的问题 现在就简单了 见main.js 看了就懂了


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
