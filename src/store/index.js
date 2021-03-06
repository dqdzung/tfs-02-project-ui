import Vue from "vue";
import Vuex from "vuex";

import products from "./modules/products";
import login from "./modules/login";
import cart from "./modules/cart";

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	modules: {
		products,
		login,
		cart,
	},
});
