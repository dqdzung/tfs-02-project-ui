import axios from "axios";

export default {
	state: {
		cats: [],
		dogs: [],
	},
	mutations: {
		SET_CATS: (state, data) => (state.cats = data),
		SET_DOGS: (state, data) => (state.dogs = data),
	},
	actions: {
		GET_HOME_PRODUCTS: async ({ commit }) => {
			try {
				const res1 = await axios({
					url:
						"http://localhost:8081/api/products?category=cat&sort=date&order=desc&limit=6",
				});
				if (res1.data.success) {
					commit("SET_CATS", res1.data.data.products);
					// console.log(res1.data.data);
				}
			} catch (err) {
				console.log(err.response.data.message);
			}

			try {
				const res2 = await axios({
					url:
						"http://localhost:8081/api/products?category=dog&sort=date&order=desc&limit=6",
				});
				if (res2.data.success) {
					commit("SET_DOGS", res2.data.data.products);
					// console.log(res2.data.data);
				}
			} catch (err) {
				console.log(err.response.data.message);
			}
		},
	},
};
