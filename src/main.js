import { createApp } from 'vue' // Import from Vue 3
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
