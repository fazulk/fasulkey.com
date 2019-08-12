import Vue from 'vue'
import '@/plugins/axios'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import './assets/styles/index.scss'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    apolloProvider: createProvider(),
    render: h => h(App)
}).$mount(`#app`)
