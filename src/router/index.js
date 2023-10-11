import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '../views/index/index.vue'
import AWS from '../views/solution/AWS/AWS.vue'
import business from '@/views/contact/business/business.vue'
import company from '@/views/contact/company/company.vue'
import dataCenter from '@/views/product/dataCenter/dataCenter.vue'
import financeSolut from '@/views/solution/financeSolut/financeSolut.vue'
import fusionCDN from '@/views/product/fusionCDN/fusionCDN.vue'
import gameSolut from '@/views/solution/gameSolut/gameSolut.vue'
import joinUs from '@/views/contact/joinUs/joinUs.vue'
import nodeDistr from '@/views/product/nodeDistr/nodeDistr.vue'
import onlineSolut from '@/views/solution/onlineSolut/onlineSolut.vue'
import security from '@/views/product/security/security.vue'
import smartdns from '@/views/product/smartdns/smartdns.vue'
import technicalSupport from '@/views/technicalSupport/technicalSupport.vue'
import videoSolut from '@/views/solution/videoSolut/videoSolut.vue'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/AWS',
    component: AWS
  },
  {
    path: '/business',
    component: business
  },
  {
    path: '/company',
    component: company
  },
  {
    path: '/dataCenter',
    component: dataCenter
  },
  {
    path: '/financeSolut',
    component: financeSolut
  },
  {
    path: '/fusionCDN',
    component: fusionCDN
  },
  {
    path: '/gameSolut',
    component: gameSolut
  },
  {
    path: '/joinUs',
    component: joinUs
  },
  {
    path: '/nodeDistr',
    component: nodeDistr
  },
  {
    path: '/onlineSolut',
    component: onlineSolut
  },
  {
    path: '/security',
    component: security
  },
  {
    path: '/smartdns',
    component: smartdns
  },
  {
    path: '/technicalSupport',
    component: technicalSupport
  },
  {
    path: '/videoSolut',
    component: videoSolut
  },
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  // 在每次路由跳转前执行的代码
  window.scrollTo(0, 0); // 滚动到页面顶部
  next(); // 继续路由跳转
});

export default router