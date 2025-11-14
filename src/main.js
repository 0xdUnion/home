import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import "@fortawesome/fontawesome-free/css/all.css"
import "beercss";
import "./css/style.css"

const app = createApp(App)

app.use(router)

app.mount('#app')
