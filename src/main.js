import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import "@mdi/font/css/materialdesignicons.min.css"
import "beercss";
import "./css/style.css"

const app = createApp(App)

app.use(router)

app.mount('#app')
