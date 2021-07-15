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
			this.$router.push(`/product/${this.product.alias}`);
		},
	},
};
</script>

<style lang="scss" scoped>
.product-card {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	transition: all 0.3s;

	&:hover {
		transform: scale(1.03);
	}

	.image-wrapper {
		height: 250px;
		img {
			height: 100%;
			max-width: 100%;
		}
	}

	.button {
		width: 100%;
		border: 0;
		border-radius: 0;
		background-color: var(--mainColor);
		&:hover {
			background-color: var(--mainColorDarken);
		}
	}

	h4 {
		margin: 10px 0;
	}
}
</style>
