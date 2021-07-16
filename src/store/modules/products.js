import axios from "axios";

export default {
	state: {
		cats: [],
		dogs: [],
	},
	mutations: {
		setCats: (state, data) => (state.cats = data),
		setDogs: (state, data) => (state.dogs = data),
	},
	actions: {
		getHomeProducts: async ({ commit }) => {
			try {
				const res1 = await axios({
					url:
						"http://localhost:8081/api/products?category=cat&sort=date&order=desc&limit=6",
				});
				if (res1.data.success) {
					commit("setCats", res1.data.data.products);
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
					commit("setDogs", res2.data.data.products);
					// console.log(res2.data.data);
				}
			} catch (err) {
				console.log(err.response.data.message);
			}
		},
	},
};
