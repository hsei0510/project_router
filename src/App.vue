<template>
  <div id="wrap">
    <!-- <img src="./assets/logo.png"> -->
    <header-component></header-component>
    <router-view/>
    <footer-component></footer-component>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* @import '@/assets/css/style.css';   */
@import url('./assets/css/style.css');
</style>
