<template>
	<div class="product-card shadow p-2 bg-white rounded">
		<div class="image-wrapper d-flex justify-content-center">
			<img :src="product.image_url" alt="product-image" @click="handleClick" />
		</div>
		<div class="text-center">{{ product.name }}</div>
		<div class="info-wrapper">
			<h4 class="text-center">${{ product.price }}</h4>
			<b-button class="button">Button</b-button>
		</div>
	</div>
</template>

<script>
// import { toKebab } from "../helpers";

import { mapActions } from "vuex";

export default {
	name: "Product",
	props: {
		product: Object,
	},
	methods: {
		...mapActions(["getProduct"]),
		handleClick() {
			// const url = toKebab(this.product.name);
			// console.log("clicked", url);
			// this.getProduct(this.product.id);

			this.$router.push(`/product/${this.product.alias}`);
		},
	},
};
</script>

<style scoped>
* {
	margin: 0;
}
.product-card {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	/* border: solid 1px red; */
	transition: all 0.3s;
}
.product-card:hover {
	transform: scale(1.03);
}
.image-wrapper {
	height: 250px;
}
img {
	height: 100%;
	max-width: 100%;
}
.button {
	width: 100%;
	border: 0;
	border-radius: 0;
	background-color: var(--mainColor);
}
.button:hover {
	background-color: var(--mainColorDarken);
}
h4 {
	margin: 10px 0;
}
</style>
