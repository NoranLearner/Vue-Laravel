import { createApp } from 'vue';

import router from './router'

import './bootstrap';

import Login from '@/login/login.vue';
import Home from '@/layouts/Home.vue';

const app = createApp({});
app.component('login-component', Login);
app.component('home-component', Home);
app.use(router);
app.mount('#app');
