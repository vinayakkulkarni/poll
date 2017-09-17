import Vue from 'vue';
import Router from 'vue-router';
import Vote from '@/components/Vote';

Vue.use(Router);
const routes = [{
  path: '/poll',
  name: 'Vote',
  component: Vote,
}];
export default new Router({
  mode: 'history',
  routes,
});
