import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Login from '@/page/Login'
import Search from '@/page/Search'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Search
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        }
    ]
})
