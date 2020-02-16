import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const lightsState = [[1,0,0],[0,1,0],[0,0,1]];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
	{
	  path: '*',
	  redirect: '/red',
	},
    {
      path: '/red',
      name: 'red',
      component: () => import('./components/Traffic.vue'),
      props: { lightsState : lightsState[0] }
    },
    {
      path: '/green',
      name: 'green',
      component: () => import('./components/Traffic.vue'),
      props: { lightsState : lightsState[2] }
    },
	{
      path: '/yellow',
      name: 'yellow',
      component: () => import('./components/Traffic.vue'),
      props: { lightsState : lightsState[1] }
    }
  ]
})

export default router;
