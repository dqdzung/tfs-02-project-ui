import Vue from "vue";
import Vuex from "vuex";

import products from "./products";
import login from "./login";

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	modules: {
		products,
		login,
	},
});
