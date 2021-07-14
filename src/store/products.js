import axios from "axios";

export default {
	state: {
		data: [],
	},
	mutations: {
		saveAllProducts(state, data) {
			state.data = data;
		},
	},
	actions: {
		async getAllProducts({ commit }) {
			const { data } = await axios({
				url: "http://localhost:3000/products",
			});
			commit("saveAllProducts", data);
		},
	},
};
