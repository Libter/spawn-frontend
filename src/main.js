// import Vue from 'vue'
// import App from './App'
//
// /* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from './route-config'
import App from './App'
// import Notfound from './components/Notfound'

// install libraries
Vue.use(require('keen-ui'));
Vue.use(require('vue-resource'))
Vue.use(VueRouter)

// create router
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

// configure router
configRouter(router)

router.start(App, '#app')
