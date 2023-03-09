import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseContainer from './components/ui/BaseContainer.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseIcon from './components/ui/BaseIcon.vue'
import BaseDropdown from './components/ui/BaseDropdown.vue'

import './assets/base.css'

const app = createApp(App)

app.component('BaseContainer', BaseContainer)
app.component('BaseButton', BaseButton)
app.component('BaseIcon', BaseIcon)
app.component('BaseDropdown', BaseDropdown)

app.use(router)

app.mount('#app')
