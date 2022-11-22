import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/components/indexComponent'
import CompanyComponent from '@/components/CompanyComponent'
import ProductComponent from '@/components/ProductComponent'
import GalleryComponent from '@/components/GalleryComponent'
import CommunityComponent from '@/components/communityComponent'
// import HeaderComponent from '@/components/headerComponents' //index.js는 라우터임, App.vue에서 <router-view/>를 나오게 하기 위해서 해주는 것!

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexComponent',
      component: IndexComponent
    },
    {
      path: '/company', //여기가 주소값이기 때문에 주소값을 추가해야함
      name: 'CompanyComponent',
      component: CompanyComponent
    },
    {
      path: '/product',
      name: 'ProductComponent',
      component: ProductComponent
    },
    {
      path: '/gallery',
      name: 'GalleryComponent',
      component: GalleryComponent
    },
    {
      path: '/community',
      name: 'CommunityComponent',
      component: CommunityComponent
    }
  ]
});
