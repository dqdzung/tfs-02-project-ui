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
			const res1 = await axios({
				url:
					"http://localhost:8081/api/products?category=cat&sort=date&order=desc&limit=6",
			});
			commit("setCats", res1.data.data.products);
			console.log(res1.data.data);

			const res2 = await axios({
				url:
					"http://localhost:8081/api/products?category=dog&sort=date&order=desc&limit=6",
			});
			commit("setDogs", res2.data.data.products);
			console.log(res2.data.data);
		},
	},
};
