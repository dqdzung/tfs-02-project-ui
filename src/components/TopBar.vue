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
					v-if="!loginStatus"
					@click="showLoginModal"
					class="topbar-login d-none d-sm-flex"
				>
					Login
				</div>
				<div v-else class="topbar-login d-none d-sm-flex" @click="handleLogout">
					Logout
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
			localStorage.removeItem("token");
		},
	},
};
</script>

<style>
.topbar {
	height: 50px;
	background-color: var(--main-color);
	color: white;
}
.topbar-login {
	padding-left: 15px;
	border-left: 1px white solid;
	cursor: pointer;
}
.modal-login-button {
	background-color: var(--main-color);
	border: var(--main-color);
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
	color: var(--main-color);
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
</style>
