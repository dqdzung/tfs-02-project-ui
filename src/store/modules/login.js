export default {
	state: {
		status: false,
	},
	mutations: {
		setStatus: (state, status) => (state.status = status),
	},
	actions: {
		setLogin: ({ commit }, status) => commit("setStatus", status),
	},
};
