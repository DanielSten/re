import { createApp } from 'vue'
import App from './App.vue'
import router from './router'




import './assets/main.css'
import Axios from "axios";

Axios.defaults.baseURL = 'http://simple-shop-landing';

const app = createApp(App)
app.use(router)

app.mount('#app')
