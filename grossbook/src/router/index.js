import Vue from 'vue'
import Router from 'vue-router'

import PaymentForm from '../components/PaymentForm'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'doc_root'
      // component:
    },
    {
      path: '/add/payment/:category',
      name: 'add_payment',
      component: PaymentForm
    }
  ]
})

export default router
