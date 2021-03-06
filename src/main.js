// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import axios from "axios"
import fetchJsonp from "fetch-jsonp"

//导入mint-ui
import { Loadmore } from 'mint-ui';
import { Swipe, SwipeItem ,Toast} from 'mint-ui';


// mint-ui的注册
Vue.component(Loadmore.name, Loadmore);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false

// 原型
Vue.prototype.axios = axios
Vue.prototype.fetchJsonp = fetchJsonp
Vue.prototype.Toast = Toast
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
