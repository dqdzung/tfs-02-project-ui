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
				<div class="d-flex align-items-center justify-content-between">
					<div class="price">$US {{ product.price }}</div>
					<div class="quantity">In Stock: {{ product.quantity }}</div>
				</div>
				<div class="options">Options:</div>
				<hr />
				<b-form>
					<div class="quantity-form py-3 d-flex">
						<input type="button" value="+" @click="plus()" />
						<input type="number" @input="handleInput" :value="this.quantity" />
						<input type="button" value="-" @click="minus()" />
					</div>
					<b-button class="add-cart-btn my-3 py-3 shadow rounded" size="lg"
						>ADD TO CART
					</b-button>
				</b-form>
			</div>
		</div>
		<h3>Description</h3>
		<div>
			{{ product.description }}
		</div>
	</b-container>
</template>

<script>
import axios from "axios";

export default {
	async created() {
		const alias = this.$route.params.pathMatch;

		const res = await axios({
			url: `http://localhost:3000/product-detail/?alias=${alias}`,
		});
		this.product = res.data[0];
	},
	data() {
		return {
			product: {},
			quantity: 1,
		};
	},
	methods: {
		plus() {
			if (this.quantity >= this.product.quantity) {
				return;
			}
			this.quantity++;
		},
		minus() {
			if (this.quantity <= 1) {
				return;
			}
			this.quantity--;
		},
		handleInput(e) {
			this.quantity = e.target.value;
		},
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
.add-cart-btn {
	background-color: var(--mainColor);
	border: none;
}
.add-cart-btn:hover {
	background-color: var(--mainColorDarken);
}
@media (max-width: 768px) {
	.main {
		display: flex;
		flex-direction: column;
	}
}
.quantity-form input[type="button"] {
	width: 30px;
	border: none;
	transition: all 0.5s;
}
.quantity-form input[type="button"]:hover {
	background-color: var(--mainColor);
}
.quantity-form input {
	width: 50px;
	text-align: center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
input[type="number"] {
	-moz-appearance: textfield;
}
</style>
