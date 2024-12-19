// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

// portal-vue 설정
import PortalVue from 'portal-vue';

const app = createApp(App);
app.use(PortalVue);
app.mount('#app');
