const prod = process.env.NODE_ENV === 'production'
const shouldSW = 'serviceWorker' in navigator && prod
if (shouldSW) {
  navigator.serviceWorker.register('/service-worker.js').then(() => {
    console.log("Service Worker Registered!")
  })
}

import Vue from 'vue'
import App from './App.vue'
import router from './router';
import settings from './components/settings.vue'
import game from './components/game.vue'
import './registerServiceWorker'

Vue.component('settings', settings)
Vue.component('game', game)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
