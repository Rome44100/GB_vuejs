import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/:value',
      name: 'doc_root'
      // component:
    }
  ]
})

// router.afterEach((to, from) => {
//   console.log(to)
// })

export default router
