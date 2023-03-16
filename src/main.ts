import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'

import App from './App.vue'
import router from './routes'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Oruga)

app.mount('#app')
