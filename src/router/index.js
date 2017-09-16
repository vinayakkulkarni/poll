import Vue from 'vue';
import Router from 'vue-router';
import Vote from '@/components/Vote';
import Results from '@/components/Results';

Vue.use(Router);
const routes = [{
  path: '/',
  name: 'Vote',
  component: Vote,
},
{
  path: '/results',
  name: 'Results',
  component: Results,
},
];
export default new Router({
  mode: 'history',
  routes,
});
