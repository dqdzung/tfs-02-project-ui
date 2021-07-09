import Vue from "vue";
import axios from "axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";

Vue.use(IconsPlugin);
Vue.use(BootstrapVue);
Vue.prototype.$http = axios;

new Vue({
	render: (h) => h(App),
}).$mount("#app");
