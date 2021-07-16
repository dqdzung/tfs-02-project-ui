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
					type="email"
					placeholder="Enter email"
					v-model="email"
					:state="error.emailValid"
					class="mb-3"
					required
				></b-form-input>

				<b-form-input
					type="password"
					placeholder="Enter password"
					v-model="password"
					@input="clearError"
					:state="error.passwordValid"
					class="mb-3"
					required
				></b-form-input>
				<ErrorMessage :message="error.message" />
				<b-button type="submit" class="modal-login-button" size="lg">
					Login
				</b-button>
			</b-form>
		</template>

		<template #modal-footer>
			<span @click="hideModal">
				<router-link to="/signup">Don't have an account? Sign Up!</router-link>
			</span>
		</template>
	</b-modal>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import ErrorMessage from "./ErrorMessage.vue";

export default {
	name: "LoginModal",
	components: {
		ErrorMessage,
	},
	mounted() {
		this.$root.$on("bv::modal::hide", () => {
			this.clearInput();
			this.clearError();
		});
	},
	data() {
		return {
			email: "",
			password: "",
			error: {
				emailValid: null,
				passwordValid: null,
				message: "",
			},
		};
	},

	methods: {
		...mapActions(["setLogin"]),
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
					this.setLogin(true);
				}
			} catch (err) {
				console.log(err);
				this.displayError();
			}
		},

		hideModal() {
			this.$bvModal.hide("login-modal");
		},

		clearError() {
			this.error.emailValid = null;
			this.error.passwordValid = null;
			this.error.message = "";
		},

		clearInput() {
			this.email = "";
			this.password = "";
		},

		displayError() {
			this.password = "";
			this.error.emailValid = false;
			this.error.passwordValid = false;
			this.error.message = "Wrong Email or Password!";
		},
	},
};
</script>

<style lang="scss" scoped>
.modal-login-button {
	background-color: var(--mainColor);
	border: 0;
	transition: all 0.3s;

	&:hover {
		background-color: var(--mainColorDarken);
	}
}
</style>
