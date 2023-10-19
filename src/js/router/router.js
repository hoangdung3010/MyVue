import { createRouter, createWebHistory } from 'vue-router';
import HomeDashboard from '@/views/home/HomeDashboard.vue';
import EmulationList from '@/views/emulation/EmulationList.vue';

const routes = [
    { path: '/', name: 'HomeRouter', component: HomeDashboard },
    { path: '/emulation', name: 'EmulationRouter', component: EmulationList }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;