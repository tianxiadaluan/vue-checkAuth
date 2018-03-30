// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MenuUtils from '@/utils/MenuUtils'

Vue.config.productionTip = false

// 没有登录
if(!sessionStorage.getItem('isLogin')){
  sessionStorage.clear();
  location.href = '/#/login'
}

// 重新加入路由
let data = JSON.parse(sessionStorage.getItem('menus'));

if (data){
  let routes = []
  MenuUtils(routes,data)
  router.addRoutes(routes)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});


