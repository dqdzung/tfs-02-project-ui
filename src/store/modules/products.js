import axios from "axios";

export default {
	state: {
		cats: [],
		dogs: [],
	},
	mutations: {
		SET_CATS: (state, payload) => (state.cats = payload),
		SET_DOGS: (state, payload) => (state.dogs = payload),
	},
	actions: {
		GET_HOME_PRODUCTS: async ({ commit }) => {
			const cats = await fetchProducts(
				"http://localhost:8081/api/products?category=cat&sort=date&order=desc&limit=6"
			);
			commit("SET_CATS", cats);

			const dogs = await fetchProducts(
				"http://localhost:8081/api/products?category=dog&sort=date&order=desc&limit=6"
			);
			commit("SET_DOGS", dogs);
		},

		GET_PRODUCTS: async ({ commit }, { url, category }) => {
			const res = await fetchProducts(url);
			switch (category) {
				case "dogs":
					commit("SET_DOGS", res);
					break;
				case "cats":
					commit("SET_CATS", res);
					break;
			}
		},
	},
	// getters: {
	// 	DOGS_PER_PAGE: (state) => state.dogs.products.length,
	//   TOTAL_DOGS: (state) => state.dogs.total_elements
	// },
};

const fetchProducts = async (url) => {
	try {
		const res = await axios({
			url: url,
		});
		if (res.data.success) {
			return res.data.data;
		}
	} catch (err) {
		console.log(err.response.data.message);
	}
};
