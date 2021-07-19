export default {
	state: {
		items: [],
	},
	mutations: {
		SET_ITEMS: (state, data) => (state.items = data),
		ADD_ITEM: (state, data) => state.items.push(data),
	},
	actions: {
		SET_CART: ({ commit }, data) => commit("SET_ITEMS", data),
		ADD_TO_CART: ({ commit }, data) => commit("ADD_ITEM", data),
	},
};
