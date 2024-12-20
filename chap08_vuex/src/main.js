import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue'
import App from './App.vue'

// vuex 등록 - 단일 스토어(1개만 등록 가능)
// stores의 index.js 파일이 모든 모듈을 통합
import store from './stores';

const app = createApp(App)
app.use(store);
app.mount('#app')
