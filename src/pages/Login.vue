<template>
	<b-form @submit.prevent="handleLogin">
		<b-form-input
			type="email"
			placeholder="Enter email"
			v-model="email"
			:state="error.emailValid"
			class="mb-3"
			required
		></b-form-input>

		<b-form-input
			type="password"
			placeholder="Enter password"
			v-model="password"
			@input="clearError"
			:state="error.passwordValid"
			class="mb-3"
			required
		></b-form-input>
		<ErrorMessage :message="error.message" />
		<b-button type="submit" class="modal-login-button" size="lg">
			Login
		</b-button>
	</b-form>
</template>
