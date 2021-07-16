<template>
	<b-container>
		<div class="main py-4">
			<div class="image-wrapper">
				<img :src="product.image_url" alt="product-image" />
			</div>
			<div class="p-3 ">
				<h3>{{ product.name }}</h3>
				<div class="brand">
					Brand: <strong>{{ product.brand_name }}</strong>
				</div>
				<div class="d-flex align-items-center justify-content-between">
					<div class="d-flex align-items-center">
						<s v-if="product.original_price">${{ product.original_price }}</s>
						<div class="price">${{ product.price }}</div>
					</div>

					<div class="quantity">In Stock: {{ product.quantity }}</div>
				</div>

				<!-- Radio buttons -->
				<b-form-group
					class="py-2"
					v-for="(option, index) in radioOptions"
					:key="index"
					:label="capitalize(index)"
				>
					<b-form-radio-group
						class="btn-radios"
						v-model="selected[index]"
						:options="option"
						name="radios-btn"
						button-variant="outline-warning"
						buttons
					></b-form-radio-group>
				</b-form-group>
				<!-- End Radio buttons -->
				<hr />
				<b-form>
					<div class="quantity-form py-3 d-flex">
						<input type="button" value="-" @click="minus()" />
						<input type="number" @input="handleInput" :value="this.quantity" />
						<input type="button" value="+" @click="plus()" />
					</div>
					<b-button class="add-cart-btn my-3 py-3 shadow rounded" size="lg"
						>ADD TO CART
					</b-button>
				</b-form>
			</div>
		</div>
		<h3>Description</h3>
		<div class="text-justify">
			{{ product.description }}
		</div>
	</b-container>
</template>

<script>
import axios from "axios";

export default {
	async created() {
		const alias = this.$route.params.pathMatch;

		const { data } = await axios({
			url: `http://localhost:8081/api/products/${alias}`,
		});

		// console.log("item", data.data);
		this.product = data.data;
		for (let option of data.data.options) {
			this.radioOptions[option.name] = [];
			this.selected[option.name] = "";
			option.option_values.forEach((elem) => {
				this.radioOptions[option.name].push({
					text: `${elem.name}`,
					value: `${elem.name}`,
				});
			});
		}
		this.options = data.data.options;
		console.log(this.product);
		// console.log(this.selected);
	},
	data() {
		return {
			product: {},
			quantity: 1,
			selected: {},
			radioOptions: {},
		};
	},
	methods: {
		plus() {
			if (this.quantity < 1) {
				this.quantity = 1;
				return;
			}
			if (this.quantity >= this.product.quantity) {
				this.quantity = this.product.quantity;
				return;
			}

			this.quantity++;
		},
		minus() {
			if (this.quantity <= 1) {
				this.quantity = 1;
				return;
			}
			if (this.quantity > this.product.quantity) {
				this.quantity = this.product.quantity;
				return;
			}
			this.quantity--;
		},
		handleInput(e) {
			this.quantity = e.target.value;
		},
		capitalize(str) {
			return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
		},
	},
};
</script>

<style lang="scss">
.main {
	display: grid;
	grid-template-columns: 1fr 1fr;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}

	.image-wrapper {
		display: flex;
		min-width: 50%;
		height: 500px;
		img {
			display: block;
			margin: auto;
			max-height: 100%;
			max-width: 100%;
			padding: 20px;
		}
	}

	.brand,
	.quantity {
		font-size: 1.2rem;
		padding-bottom: 10px;
	}

	.price {
		font-size: 2rem;
		font-weight: bold;
		padding-bottom: 10px;
	}

	.add-cart-btn {
		background-color: var(--mainColor);
		border: none;
		&:hover {
			background-color: var(--mainColorDarken);
		}
	}

	.btn-radios {
		label {
			margin: 0 5px;
			border-radius: 0;
		}
		input {
			display: none;
		}
	}

	.quantity-form {
		input {
			width: 50px;
			text-align: center;
		}

		input[type="button"] {
			width: 30px;
			border: none;
			transition: all 0.5s;
			&:hover {
				background-color: var(--mainColor);
			}
		}

		input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
		input[type="number"] {
			-moz-appearance: textfield;
		}
	}
}
</style>
