// 프로젝트 전체에 대한 전역 설정이 여기에 기술된다

// 프로젝트 전역에서 사용할 style 파일 import
// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// 라우터 설정
// store 설정
// 그 외의 plugin 설정 등...

import { createApp } from 'vue';

// 화면에 보이는 View에 관련된 항목은 이 App.vue가 담당
import App from './App.vue';

createApp(App).mount('#app');
