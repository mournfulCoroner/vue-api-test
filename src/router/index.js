import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './../components/HelloWorld.vue'
import News from  './../components/News.vue'
import Products from  './../components/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  }
]

const router = new VueRouter({
  routes
})

export default router
