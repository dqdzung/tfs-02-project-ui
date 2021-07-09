<template>
	<div class="nav-wrapper shadow mb-3 bg-white sticky-top">
		<b-container>
			<b-navbar toggleable="sm" type="light">
				<b-navbar-brand
					><router-link to="/">Pet Pal</router-link></b-navbar-brand
				>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav class="d-block d-sm-none">
						<b-form-input
							class="search"
							size="sm"
							placeholder="What do you want to find?"
						/>
					</b-navbar-nav>
					<b-navbar-nav>
						<b-nav-item
							><router-link to="/about">About Us</router-link></b-nav-item
						>
					</b-navbar-nav>
					<b-navbar-nav>
						<b-nav-item
							><router-link to="/brands">Brands</router-link></b-nav-item
						>
					</b-navbar-nav>
					<b-navbar-nav>
						<b-nav-item
							><router-link to="/dogs">For Dogs</router-link></b-nav-item
						>
					</b-navbar-nav>
					<b-navbar-nav>
						<b-nav-item
							><router-link to="/cats">For Cats</router-link></b-nav-item
						>
					</b-navbar-nav>
					<b-navbar-nav class="d-block d-sm-none">
						<b-nav-item>Login</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</b-container>
	</div>
</template>

<script>
export default {
	name: "Navbar",
};
</script>

<style>
.navbar-brand {
	font-family: var(--header-font);
	font-size: 2.5rem;
}
#nav-collapse {
	justify-content: space-evenly;
	font-weight: bold;
}
#nav-collapse .search {
	width: 70%;
	margin: 0 auto;
}
.nav-link {
	text-align: center;
}
.nav-link:hover {
	color: var(--main-color) !important;
}
.nav-wrapper a,
a:hover,
a:focus,
a:active {
	text-decoration: none;
	color: inherit;
}
</style>
