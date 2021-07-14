export default {
	state: {
		status: false,
	},
	mutations: {
		saveStatus(state, data) {
			state.status = data;
		},
	},
	actions: {
		login({ commit }) {
			commit("saveStatus", true);
		},
		logout({ commit }) {
			commit("saveStatus", false);
		},
	},
};
