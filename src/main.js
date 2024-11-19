import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import DashboardPlugin from "./plugins/dashboard-plugin";
import store from './store/index';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);
// Photoswipe Gallery
import Photoswipe from "vue-pswipe";
Vue.use(Photoswipe);

// plugin setup
Vue.use(DashboardPlugin);

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
