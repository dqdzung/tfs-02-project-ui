<template>
	<div>
		<HeroBanner />
		<b-container>
			<div class="py-3">
				<div class="d-flex align-items-center justify-content-between px-5">
					<h2>Dogs</h2>
					<router-link to="/dogs"> See all »</router-link>
				</div>
				<div class="product-container ">
					<Product
						v-for="product in products"
						:key="product.id"
						:product="product"
					/>
				</div>
			</div>
			<div class="py-3">
				<div class="d-flex align-items-center justify-content-between px-5">
					<h2>Cats</h2>
					<router-link to="/cats"> See all »</router-link>
				</div>
			</div>
		</b-container>
	</div>
</template>

<script>
import HeroBanner from "../components/HeroBanner.vue";
import Product from "../components/ProductCard.vue";
import { mapState } from "vuex";

// import axios from "axios";

export default {
	components: {
		HeroBanner,
		Product,
	},
	computed: mapState({
		products: (state) => state.products.data,
	}),
};
</script>

<style scoped>
.product-container {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 1rem;
}
</style>
