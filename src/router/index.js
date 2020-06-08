import Vue from 'vue';
import Router from 'vue-router';
import home from './modules/home.js'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: "/",
  routes: [{
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/About',
      name: 'About',
      component: () => import("@/views/About"),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import("@/views/Home"),
      redirect:"/Home/HomePage",
      meta: {
        keepAlive: true
      },
      children: [
        ...home
      ]
    },
  ],

  //控制滚动条是否滚动到顶部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }

})