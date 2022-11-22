<template>
  <footer>
    <h3>f-logo</h3>
    <ul>
      <li>company</li>
      <li>product</li>
      <li>notice</li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'footerComponent',
  data () {
    return {
      msg: 'this is footer component!!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul li {
    color: red;
  }
</style>
