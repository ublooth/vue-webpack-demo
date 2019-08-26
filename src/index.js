import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router';
import Foo from './foo.vue'
import Bar from './bar.vue'
import Count from './counter.vue'
import Todo from './todoList.vue'

Vue.use(VueRouter)


const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/counter', component: Count },
  { path: '/todo', component: Todo },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
    render: (h) => h(App)
}).$mount('#app')
