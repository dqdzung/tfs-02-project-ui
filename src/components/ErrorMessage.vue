<template>
	<div class="error-text mb-3">{{ message }}</div>
</template>

<script>
export default {
	name: "ErrorMessage",
	props: {
		message: String,
	},
};
</script>

<style>
.error-text {
	color: red;
}
</style>
