import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import FsAbout from '@/components/FsAbout'
import Merch from '@/components/Merch'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/merch', name: 'Merch', component: Merch },
    { path: '/fs-about', name: 'FsAbout', component: FsAbout },
    { path: '/about', name: 'About', component: About }
  ]
})
