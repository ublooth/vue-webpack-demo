import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router';
import Foo from './foo.vue'
import Bar from './bar.vue'
import Count from './counter.vue'
import Todo from './todoList.vue'

Vue.use(VueRouter);//执行VueRouter


const routes = [
  { path: '/foo',//浏览器访问路径
    component: Foo//模板，对应import引入的模板信息
   },
  { path: '/bar', component: Bar },
  { path: '/counter', component: Count },
  { path: '/todo', component: Todo },
]
// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
// 创建和挂载根实例。记得要通过 router 配置参数注入路由，从而让整个应用都有路由功能
new Vue({
  router,
  render: (h) => h(App)
    // render: function(h) {
    //   return h(App);
    // }//方法简写，箭头函数
}).$mount('#app')
//$mount() 手动地挂载一个未挂载的实例