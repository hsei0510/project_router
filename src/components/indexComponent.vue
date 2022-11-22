<template>
  <div class="main">
    <img src="@/assets/img/logo.png" alt="로고">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'IndexComponent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
