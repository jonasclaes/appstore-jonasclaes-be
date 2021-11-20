import { createRouter, createWebHashHistory } from 'vue-router'
import AppList from '/src/components/AppList.vue'
import App from '/src/components/App.vue'
import About from '/src/components/About.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppList,
    },
    {
        path: '/app/:id',
        name: 'App',
        component: App,
        props: true
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router