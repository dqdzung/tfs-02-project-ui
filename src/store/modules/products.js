import axios from "axios";

export default {
	state: {
		data: [],
	},
	mutations: {
		setProducts: (state, data) => (state.data = data),
	},
	actions: {
		getAllProducts: async ({ commit }) => {
			const { data } = await axios({
				url: "http://localhost:3000/products",
			});
			commit("setProducts", data);
		},
	},
};
