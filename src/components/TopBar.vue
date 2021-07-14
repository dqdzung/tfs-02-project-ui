<template>
	<div class="topbar d-flex align-items-center">
		<b-container
			class="d-flex align-items-center justify-content-between topbar-inner"
		>
			<div class="search-wrapper d-flex align-items-center d-none d-sm-flex">
				<b-form-input
					class="search"
					size="sm"
					placeholder="What do you want to find?"
				/>
				<b-icon icon="search" />
			</div>
			<div class="login-cart-wrapper d-flex justify-content-between ">
				<div class="cart-wrapper">
					Cart
					<b-icon icon="cart-fill" variant="light" />
				</div>

				<div
					@click="loginStatus ? handleLogout() : showLoginModal()"
					class="topbar-login d-none d-sm-flex"
				>
					{{ loginStatus ? "Logout" : "Login" }}
				</div>
			</div>
		</b-container>
	</div>
</template>

<script>
export default {
	name: "TopBar",
	props: {
		loginStatus: Boolean,
	},
	methods: {
		showLoginModal() {
			this.$bvModal.show("login-modal");
		},
		handleLogout() {
			if (confirm("Are you sure?")) {
				localStorage.removeItem("token");
				this.$emit("logout");
			}
		},
	},
};
</script>

<style scoped>
.topbar {
	height: 50px;
	background-color: var(--mainColor);
	color: white;
}
.topbar-login {
	padding-left: 15px;
	border-left: 1px white solid;
	cursor: pointer;
}
.modal-login-button {
	background-color: var(--mainColor);
	border: var(--mainColor);
}
.cart-wrapper {
	padding-right: 15px;
}
.search-wrapper {
	width: 35%;
	min-width: 250px;
}
.search {
	text-align: center;
}
.search::placeholder {
	text-align: center;
}
.b-icon[aria-label="search"] {
	position: relative;
	right: 25px;
	color: var(--mainColor);
}
@media (max-width: 575px) {
	.topbar-inner,
	.login-cart-wrapper {
		justify-content: flex-end !important;
	}
}
.modal-footer-inner {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
