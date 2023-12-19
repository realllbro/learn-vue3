//import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';

// 전역 컴포넌트 등록
//import AppCard from '@/components/AppCard.vue';

// 1. 뷰 인스턴스 생성
const app = createApp(App);

// 2. 마운트 전에 전역컴포넌트 등록해야 사용할 수 있다.
// app.component('AppCard', AppCard);

// 3. 마운트
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
