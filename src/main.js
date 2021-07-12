import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import router from "./router";

Vue.use(IconsPlugin);
Vue.use(BootstrapVue);

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
