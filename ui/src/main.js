import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { apolloProvider } from '@/plugins/apollo.js'
import '@/assets/styles/index.scss'

Vue.config.productionTip = false

new Vue({
    apolloProvider,
    router,
    render: h => h(App)
}).$mount(`#app`)
