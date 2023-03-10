import { createRouter, createWebHistory } from 'vue-router';
import MemberSummary from '../pages/MemberSummary.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MemberSummary,
    },
    {
      path: '/members/:id',
      component: () => import('../pages/MemberDetails.vue'),
      children: [
        {
          path: '',
          component: () => import('../components/details/MemberProfile.vue'),
          alias: 'profile',
        },
        {
          path: 'addresses',
          component: () => import('../components/details/MemberAddresses.vue'),
        },
      ],
    },
  ],
});

export default router;
