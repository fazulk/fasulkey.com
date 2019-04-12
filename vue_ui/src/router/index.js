import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
import Resume from '../views/resume'

Vue.use(Router)

export default new Router({
    mode: `history`,
    base: process.env.BASE_URL,
    routes: [
        {
            path: `/`,
            name: `home`,
            component: Home
        },
        {
            path: `/resume`,
            name: `resume`,
            component: Resume
        }
    ]
})
