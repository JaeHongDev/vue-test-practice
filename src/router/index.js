import Home from '@/components/HelloWorld.vue';
import AddCalculator from '@/components/AddCalculator.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/addCalculator',
    name: 'AddCalculator',
    component: AddCalculator,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
