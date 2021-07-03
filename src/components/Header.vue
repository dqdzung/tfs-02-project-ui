<template>
	<div>
		<TopBar />
		<div class="header-wrapper shadow p-3 mb-3 bg-white rounded">
			<b-container>
				<b-navbar toggleable="sm" type="light">
					<b-navbar-brand href="#">Pet Pal</b-navbar-brand>

					<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

					<b-collapse id="nav-collapse" is-nav>
						<b-navbar-nav>
							<b-nav-item href="#">About</b-nav-item>
						</b-navbar-nav>
						<b-navbar-nav>
							<b-nav-item href="#">Brands</b-nav-item>
						</b-navbar-nav>
						<b-navbar-nav>
							<b-nav-item href="#">For Dogs</b-nav-item>
						</b-navbar-nav>
						<b-navbar-nav>
							<b-nav-item href="#">For Cats</b-nav-item>
						</b-navbar-nav>
					</b-collapse>
					<b-icon
						icon="cart-fill"
						variant="dark"
						class="d-block d-sm-none h1"
					/>
				</b-navbar>
			</b-container>
		</div>
	</div>
</template>

<script>
import TopBar from "./TopBar.vue";

export default {
	name: "Header",
	components: {
		TopBar,
	},
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
.nav-link {
	text-align: center;
}
.nav-link:hover {
	color: var(--main-color) !important;
}
@media only screen and (max-width: 576px) {
	.header-wrapper .navbar {
		display: flex;
		justify-content: space-between;
	}
	.navbar-toggler {
		order: -1;
	}
}
</style>
