<template>
	<div>
		<TopBar :loginStatus="isLoggedIn" @logout="handleLogout" />
		<Navbar />

		<router-view />

		<Footer />
		<LoginModal @login="handleLogin" />
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
	created() {
		this.$store.dispatch("getAllProducts");
	},
	mounted() {
		this.$nextTick(function() {
			const token = localStorage.getItem("token");
			if (token) {
				this.isLoggedIn = true;
			}
		});
	},
	data() {
		return {
			isLoggedIn: false,
		};
	},
	methods: {
		handleLogin() {
			this.isLoggedIn = true;
		},
		handleLogout() {
			this.isLoggedIn = false;
		},
	},
};
</script>
