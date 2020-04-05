// 路由
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '/',
      component: Home,
      children: [
        {
          path: 'buyCar',
          name: 'buyCar',
          component: () => import('@/components/BuyCar.vue')
        },
        {
          path: 'test',
          name: 'test',
          component: () => import('./views/TestComponent.vue')
        },
        {
          path: 'weather',
          name: 'weather',
          component: () => import('@/components/test1/Weather.vue')
        },
        {
          path: 'about',
          name: 'about',
          // 路由懒加载，当访问这个组件时才加载路由，避免首屏渲染过多内容
          component: () =>
            import(/* webpackChunkName: "about" */ './views/About.vue')
        }
      ]
    },
    {
      path: '/carousel',
      name: 'Carousel',
      component: () => import('@/components/test1/ElementCarouselTest')
    }
  ]
})
