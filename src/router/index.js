import Vue from 'vue'
import Router from 'vue-router'
import TeamSelectorFrom from '@/components/TeamSelectorForm'
import TeamGenerated from '@/components/TeamGenerated'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Selection Form',
      component: TeamSelectorFrom
    },
    {
      path: '/team',
      name: 'Generated Team',
      component: TeamGenerated
    }
  ]
})
