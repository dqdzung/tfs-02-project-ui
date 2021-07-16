<template>
	<b-container>
		<div class="main py-5">
			<div class="image-wrapper">
				<img :src="product.image_url" alt="product-image" />
			</div>
			<div class="info-wrapper p-3 ">
				<h3>{{ product.name }}</h3>
				<div class="brand">
					Brand: <strong>{{ product.brand_name }}</strong>
				</div>
				<div class="price">$US {{ product.price }}</div>
				<div class="quantity">Quantity: {{ product.quantity }}</div>
				<div class="options">Options:</div>
				<input type="number" />
				<b-button class="btn" size="lg">Add to Cart</b-button>
			</div>
		</div>
		<h3>Description</h3>
		<div>
			{{ product.description }}
		</div>
	</b-container>
</template>

<script>
// import { mapActions, mapState } from "vuex";
import axios from "axios";

export default {
	async created() {
		const alias = this.$route.params.pathMatch;

		const { data } = await axios({
			url: `http://localhost:8081/api/products/${alias}`,
		});

		console.log("food", data.data);
		this.product = data.data;
	},
	data() {
		return {
			product: {},
		};
	},
};
</script>

<style scoped>
.main {
	display: grid;
	grid-template-columns: 1fr 1fr;
}
.brand,
.quantity,
.options {
	font-size: 1.2rem;
	padding-bottom: 10px;
}
.price {
	font-size: 2rem;
	font-weight: bold;
	padding-bottom: 10px;
}
.image-wrapper {
	display: flex;
	justify-content: center;
	min-width: 50%;
	height: 500px;
}
img {
	width: 100%;
	object-fit: contain;
}
.btn {
	background-color: var(--mainColor);
	border: none;
}
.btn:hover {
	background-color: var(--mainColorDarken);
}
@media (max-width: 768px) {
	.main {
		display: flex;
		flex-direction: column;
	}
}
</style>
