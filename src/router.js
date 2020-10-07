import Vue from 'vue'
import Router from 'vue-router'
import settings from './components/settings.vue'
import game from './components/game.vue'
import zasady from './components/zasady.vue'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'settings',
      component: settings
    },
    {
      path: '/game',
      name: 'game',
      component: game
    },
    {
      path: '/zasady',
      name: 'zasady',
      component: zasady
    },
  ],
  mode: 'history'
})