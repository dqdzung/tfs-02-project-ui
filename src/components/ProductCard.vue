<template>
	<div class="product-card shadow p-2 bg-white rounded">
		<div class="image-wrapper d-flex justify-content-center">
			<img
				src="https://petmaster.vn/wp-content/uploads/2020/05/46.jpg"
				alt=""
			/>
		</div>
		<h3 class="text-center">Cat food</h3>
		<div class="text-center">$999</div>
		<b-button class="button">Button</b-button>
	</div>
</template>

<script>
export default {
	name: "Product",
};
</script>

<style scoped>
* {
	margin: 0;
}
.product-card {
	display: flex;
	flex-direction: column;
	align-content: space-between;
	width: 100%;
	/* border: solid 1px red; */
	transition: all 0.3s;
}
.product-card:hover {
	transform: scale(1.03);
}
.image-wrapper {
	padding: 10px;
	height: 250px;
}
img {
	height: 100%;
	/* width: 100%; */
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
</style>
