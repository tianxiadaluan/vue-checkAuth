<template>
  <div id="v404">
    login
    <button @click="login">登录测试</button>
  </div>
</template>
<script>
  import MenuUtils from '@/utils/MenuUtils'
  export default {
    methods: {
      login (){
        let menus = [
          {
            path: '/',
            name: 'index',
            component: 'index'
          },
          {
            path: '/u',
            name: 'u',
            component: 'u'
          },
          {
            path: '/me',
            name: 'me',
            component: 'me'
          }
        ];

        console.log(menus);
        sessionStorage.setItem('isLogin',true);
        sessionStorage.setItem('menus',JSON.stringify(menus));
        
        let routes = [];
        MenuUtils(routes,menus);
        this.$router.addRoutes(routes);

        console.log(sessionStorage.getItem('menus'));
        this.$router.push({path:'/'});
      }
    }
  }
</script>
