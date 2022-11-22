<template>
  <header id="header">
    <h1 id="top-logo"><router-link :to="'/'">XWOOD</router-link></h1>
    <nav id="top-nav">
      <ul>
        <!-- <li>
          <router-link :to="'/company'">Company</router-link>
        </li>
        <li>
          <router-link :to="'/Product'">Product</router-link>
        </li>
        <li>
          <router-link :to="'/gallery'">Gallery</router-link>
        </li>
        <li>
          <router-link :to="'/community'">Community</router-link>
        </li> -->
        <li v-for="list in gnbMenu">
          <router-link v-bind:to="list.path">{{list.text}}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'headerComponent',
  data () {
    return {
      gnbMenu: [
        { path: '/company', text: 'Company' },
        { path: '/Product', text: 'Product' },
        { path: '/gallery', text: 'Gallery' },
        { path: '/community', text: 'Community' }
      ]
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
