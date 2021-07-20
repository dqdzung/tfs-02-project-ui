<template>
	<!-- <h2>For Dogs</h2> -->
	<b-container>
		<div class="header d-flex justify-content-between py-4  ">
			<b-breadcrumb>
				<b-breadcrumb-item>
					<router-link to="/">Home</router-link>
				</b-breadcrumb-item>
				<b-breadcrumb-item active>{{ this.catOrDog }}</b-breadcrumb-item>

				<b-breadcrumb-item v-if="this.routeChange" active
					>Page {{ this.routeChange }}</b-breadcrumb-item
				>
			</b-breadcrumb>
			<div>Sort</div>
		</div>

		<div class="main-wrapper d-flex">
			<div class="sidebar">
				<div class="sidebar-header">Filter</div>
			</div>
			<div class="product-container">
				<div class="product-grid" v-if="this.catOrDog == 'Dogs'">
					<Product
						v-for="product in dogs.products"
						:key="product.alias"
						:product="product"
					/>
				</div>

				<div class="product-grid" v-if="this.catOrDog == 'Cats'">
					<Product
						v-for="product in cats.products"
						:key="product.alias"
						:product="product"
					/>
				</div>

				<!-- Pagination -->
				<div class="pagination-wrapper mt-5">
					<b-pagination-nav
						pills
						size="lg"
						:number-of-pages="this.getTotalPage"
						align="center"
						use-router
						:link-gen="linkGen"
						@input="handlePageChange"
					></b-pagination-nav>
					<!-- End Pagination -->
				</div>
			</div>
		</div>
	</b-container>
</template>

<script>
import Product from "../components/ProductCard.vue";
import { mapState, mapActions } from "vuex";

export default {
	name: "Products",
	components: {
		Product,
	},
	mounted() {
		const category = this.catOrDog == "Dogs" ? "dog" : "cat";
		const payload = {
			url: `http://localhost:8081/api/products?category=${category}&limit=8`,
			category: this.catOrDog.toLowerCase(),
		};
		this.GET_PRODUCTS(payload);
	},
	// mounted() {
	// 	console.log(this.dogs);
	// },
	computed: {
		...mapState({
			dogs: (state) => state.products.dogs,
			cats: (state) => state.products.cats,
		}),
		routeChange() {
			return this.$route.query.page;
		},
		catOrDog() {
			return this.$route.name;
		},
		getTotalPage() {
			return this.catOrDog == "Dogs"
				? this.dogs.total_page
				: this.cats.total_page;
		},
	},
	watch: {
		$route() {
			this.handlePageChange();
		},
	},
	methods: {
		...mapActions(["GET_PRODUCTS"]),

		linkGen(pageNum) {
			return pageNum === 1 ? "?" : `?page=${pageNum}`;
		},

		handlePageChange(page = 1) {
			// console.log("page changed", page);
			const category = this.catOrDog == "Dogs" ? "dog" : "cat";
			const payload = {
				url: `http://localhost:8081/api/products?category=${category}&limit=8&page=${page}`,
				category: this.catOrDog.toLowerCase(),
			};
			this.GET_PRODUCTS(payload);
		},
	},
};
</script>

<style lang="scss">
.header {
	ol {
		margin: 0;
	}
}

.main-wrapper {
	@media (max-width: 768px) {
		flex-direction: column;
	}

	.sidebar {
		width: 20%;
		min-width: 250px;
		border: 1px solid red;
		/* padding: 20px; */
		margin: 10px 0;
		@media (max-width: 768px) {
			width: 100%;
		}
	}

	.product-container {
		width: 100%;

		.product-grid {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
			grid-gap: 1rem;
			margin: 10px 0;
		}

		.pagination-wrapper {
			.page-link {
				color: var(--mainColor);
			}
			.page-item.active .page-link {
				color: white;
				background-color: var(--mainColor);
				border: none;
			}
			.page-item.disabled .page-link {
				color: #6c757d;
			}
		}
	}
}
</style>
