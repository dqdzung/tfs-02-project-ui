<template>
	<div>
		<HeroBanner />
		<b-container>
			<div class="py-3">
				<div class="d-flex align-items-center justify-content-between px-5">
					<h2>Dogs</h2>
					<a href="">See all »</a>
				</div>
				<div class="product-container ">
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
				</div>
			</div>
			<div class="py-3">
				<div class="d-flex align-items-center justify-content-between px-5">
					<h2>Cats</h2>
					<a href="">See all »</a>
				</div>
				<div class="product-container ">
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
				</div>
			</div>
		</b-container>
	</div>
</template>

<script>
import HeroBanner from "../components/HeroBanner.vue";
import Product from "../components/ProductCard.vue";

export default {
	components: {
		HeroBanner,
		Product,
	},
};
</script>

<style scoped>
.product-container {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 1rem;
}
</style>
