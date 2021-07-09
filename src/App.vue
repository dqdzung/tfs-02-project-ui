<template>
	<div>
		<TopBar :loginStatus="isLoggedIn" />
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

import "./assets/main.css";

export default {
	name: "App",
	components: {
		TopBar,
		Navbar,
		Footer,
		LoginModal,
	},
	computed: {
		isLoggedIn() {
			const token = localStorage.getItem("token");
			return token ? true : false;
		},
	},
	data() {
		return {};
	},
	methods: {},
};
</script>
