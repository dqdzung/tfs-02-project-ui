export default {
	state: {
		items: [],
	},
	mutations: {
		SET_ITEMS: (state, payload) => (state.items = payload),
		ADD_ITEM: (state, payload) => state.items.push(payload),
		SET_QUANTITY: (state, { index, quantity }) =>
			(state.items[index].quantity = quantity),
	},
	actions: {
		SET_CART: ({ commit }, payload) => commit("SET_ITEMS", payload),
		ADD_TO_CART: ({ commit }, payload) => commit("ADD_ITEM", payload),
		ADD_QUANTITY: ({ commit }, payload) => commit("SET_QUANTITY", payload),
	},
};
