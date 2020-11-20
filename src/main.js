import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart.vue';
import JobDetail from './components/JobDetail.vue';

Vue.component('app-cart', Cart);
Vue.component('app-job-detail', JobDetail);

Vue.config.productionTip = false;

// css
require('./assets/css/main.css');

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
