<template>
	<b-modal id="login-modal" centered>
		<template #modal-header>
			<h5 class="text-uppercase">Login</h5>
			<b-button size="sm" variant="outline-danger" @click="hideModal">
				x
			</b-button>
		</template>

		<template>
			<b-form @submit.prevent="handleLogin">
				<b-form-input
					id="input-1"
					type="email"
					placeholder="Enter email"
					v-model="email"
					required
					class="mb-3"
				></b-form-input>

				<b-form-input
					id="input-2"
					type="password"
					placeholder="Enter password"
					v-model="password"
					@input="clearError"
					:state="error.state"
					class="mb-3"
					required
				></b-form-input>
				<div class="error-text mb-3">{{ error.message }}</div>
				<b-button type="submit" class="modal-login-button" size="lg">
					Login
				</b-button>
			</b-form>
		</template>

		<template #modal-footer>
			<a href="/signup">Don't have an account? Sign Up!</a>
		</template>
	</b-modal>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			email: "",
			password: "",
			error: {
				state: null,
				message: "",
			},
			isLoggedIn: false,
		};
	},

	methods: {
		async handleLogin() {
			try {
				const res = await axios({
					method: "POST",
					url: "http://localhost:8081/api/auth/login",
					data: {
						email: this.email,
						password: this.password,
					},
					headers: {
						"Access-Control-Allow-Origin": "*",
					},
				});

				if (res.data.success) {
					console.log("logged in");
					localStorage.setItem("token", res.data.data.token);
					this.hideModal();
					this.isLoggedIn = true;
				}
			} catch (err) {
				console.log(err);
				this.displayError();
			}
		},
		hideModal() {
			this.clearInput();
			this.$bvModal.hide("login-modal");
		},
		clearError() {
			this.error.state = null;
			this.error.message = "";
		},
		clearInput() {
			this.email = "";
			this.password = "";
		},
		displayError() {
			this.password = "";
			this.error.state = false;
			this.error.message = "Wrong Email or Password!";
		},
	},
};
</script>

<style>
.error-text {
	color: red;
}
</style>
