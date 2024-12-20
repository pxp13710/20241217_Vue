import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue'
import App from './App.vue'

// vuex 등록 - 단일 스토어(1개만 등록 가능)
import countStore from './stores/countStore';

const app = createApp(App)
app.use(countStore);
app.mount('#app')
