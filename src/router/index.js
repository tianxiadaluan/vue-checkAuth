import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

let routerArr = [{
  path: '/login',
  name: 'login',
  component: (resolve) => require(['@/components/login.vue'], resolve)
}, {
  path: '/404',
  name: '404',
  component: (resolve) => require(['@/components/404.vue'], resolve)
}, {
  path: '*',
  redirect: '/404'
}];

let vueRouter = new Router({
  routes: routerArr
});

export default vueRouter;
