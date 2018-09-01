import Vue from 'vue'

import * as firebase from './api/firebase'

import Router from 'vue-router'
import Home from './views/Home.vue'
import EventPage from './views/Event.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Profile from './views/Profile.vue'



Vue.use(Router)


let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name:'login',
      component: Login
    },
    {
      path: '/signup',
      name:'signup',
      component: Signup
    },
    {
      path: '/profile',
      name:'profile',
      component: Profile,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/event',
      name:'event',
      component: EventPage,
      meta:{
        requireAuth:true
      }
    }
  ]
})

router.beforeEach(async (to,from,next)=>{
  let currentUser = await firebase.getUser()
  let requireAuth = to.matched.some(record => record.meta.requireAuth)
  if (requireAuth && !currentUser) next('login')
  else next()
})

export default router