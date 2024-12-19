import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

// 라우터 설정 - 
// import 할 파일명이 index.js, index.json인 경우 파일명 생략 가능
import router from './router';

const app = createApp(App);
app.use(router)
app.mount('#app')
