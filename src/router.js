import Vue from 'vue'
import Router from 'vue-router'
import briefcase from './views/briefcase.vue'
import something from './views/something.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'briefcase',
      component: briefcase
    },
    {
      path: '/something',
      name: 'something',
      component: something
    }
  ]
})
