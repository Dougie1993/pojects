import * as Vue from 'vue'
import * as Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'

Vue.use(Router)
/* eslint-disable no-new */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/regiser',
        name: 'register',
        component: Register
      }
  ]
})