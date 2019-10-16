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
      // path: '/',
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'buyCar',
          name: 'buyCar',
          component: () => import('@/components/BuyCar.vue')
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          // 路由懒加载，当访问这个组件时才加载路由，避免首屏渲染过多内容
          component: () =>
            import(/* webpackChunkName: "about" */ './views/About.vue')
        }
      ]
    }
  ]
})
