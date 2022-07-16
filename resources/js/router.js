import vueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(vueRouter);

import Index from './components/Views/IndexComponent';
import Authorization from './components/Views/Authorization';
import Register from './components/Views/Register';
import NotFound from './components/Exceptions/NotFound';

const routes = [
    { path: '/authorization', component: Authorization },
    { path: '/register', component: Register },
    { path: '/', component: Index },
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' },
];

export default new vueRouter({
    mode: 'history',
    routes
})
