<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">Index</router-link>
    <router-link to="/u">U</router-link>
    <router-link to="/me">Me</router-link>
    <button @click="logout">退出</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout(){
      sessionStorage.clear();
      location.reload();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
