<template>
	<div>
		<Header></Header>
	</div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
	name: "App",
	components: {
		Header,
	},
};
</script>

<style>
:root {
	--main-color: #fdbc1c;
	--header-font: "Great Vibes", cursive;
}
</style>
