/* eslint-disable no-unused-vars */
// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

// portal-vue 설정
import PortalVue from 'portal-vue';

const app = createApp(App);
app.use(PortalVue);

// 프로젝트 전체에 대한 에러를 잡아 처리한다
app.config.errorHandler = (err, comp, info) => {
  console.log('---------- main error ----------');

  // return 이 없음
}
// 프로젝트 전체에 대한 경고를 잡아 처리
app.config.warnHandler = (warn, comp, info) => {
  console.log('---------- main warn ----------');
  console.warn(warn);
  console.warn(comp);
  console.warn(info);
}


app.mount('#app');
