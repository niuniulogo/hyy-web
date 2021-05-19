import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import Vant from 'vant'
import './reset.scss'



const app = createApp(App);
app.use(Vant);
app.use(router);
app.mount('#app');