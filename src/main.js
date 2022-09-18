import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import VueCookieAcceptDecline from 'vue-cookie-accept-decline';
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css';


createApp(App).use(router).mount('#app');

// app.component('vue-cookie-accept-decline', VueCookieAcceptDecline);

