<template>
	<div class="topbar d-flex align-items-center ">
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
				<div>
					Cart
					<b-icon icon="cart-fill" variant="light" />
				</div>
				<div class="d-none d-sm-flex">Login</div>
			</div>
		</b-container>
	</div>
</template>

<script>
export default {};
</script>

<style>
.topbar {
	height: 50px;
	background-color: var(--main-color);
	color: white;
}
.login-cart-wrapper {
	width: 100px;
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
</style>
