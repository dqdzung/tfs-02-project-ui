<template>
	<div>
		<TopBar />
		<Navbar />

		<router-view />

		<Footer />
		<LoginModal />
	</div>
</template>

<script>
import TopBar from "./components/TopBar.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import LoginModal from "./components/LoginModal.vue";

import { mapActions } from "vuex";

import "./assets/main.css";

export default {
	name: "App",
	components: {
		TopBar,
		Navbar,
		Footer,
		LoginModal,
	},
	created() {
		this.getAllProducts();
	},
	// updated() {
	// 	const token = localStorage.getItem("token");
	// 	if (!token) {
	// 		this.setLogin(false);
	// 	}
	// },
	methods: {
		...mapActions(["getAllProducts", "setLogin"]),
	},
};
</script>
