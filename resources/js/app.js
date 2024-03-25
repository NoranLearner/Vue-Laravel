import './bootstrap';
import { createApp } from 'vue';
import Login from '@/login/login.vue';
const app = createApp({});
app.component('login-component', Login);
app.mount('#app');
