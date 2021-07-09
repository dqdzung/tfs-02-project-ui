<template>
	<div>
		<TopBar :login="isLoggedIn" />
		<Navbar />
		<div class="main-content">
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum minus
				repellendus a ea quibusdam vel dolore. Nam ipsum provident ex error, at
				numquam sunt. Corrupti eius, atque tempora facere rem libero quas
				consequuntur consequatur vitae labore numquam enim similique ex corporis
				eveniet, adipisci repudiandae impedit ullam eligendi quos tempore autem!
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum minus
				repellendus a ea quibusdam vel dolore. Nam ipsum provident ex error, at
				numquam sunt. Corrupti eius, atque tempora facere rem libero quas
				consequuntur consequatur vitae labore numquam enim similique ex corporis
				eveniet, adipisci repudiandae impedit ullam eligendi quos tempore autem!
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum minus
				repellendus a ea quibusdam vel dolore. Nam ipsum provident ex error, at
				numquam sunt. Corrupti eius, atque tempora facere rem libero quas
				consequuntur consequatur vitae labore numquam enim similique ex corporis
				eveniet, adipisci repudiandae impedit ullam eligendi quos tempore autem!
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum minus
				repellendus a ea quibusdam vel dolore. Nam ipsum provident ex error, at
				numquam sunt. Corrupti eius, atque tempora facere rem libero quas
				consequuntur consequatur vitae labore numquam enim similique ex corporis
				eveniet, adipisci repudiandae impedit ullam eligendi quos tempore autem!
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum minus
				repellendus a ea quibusdam vel dolore. Nam ipsum provident ex error, at
				numquam sunt. Corrupti eius, atque tempora facere rem libero quas
				consequuntur consequatur vitae labore numquam enim similique ex corporis
				eveniet, adipisci repudiandae impedit ullam eligendi quos tempore autem!
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum minus
				repellendus a ea quibusdam vel dolore. Nam ipsum provident ex error, at
				numquam sunt. Corrupti eius, atque tempora facere rem libero quas
				consequuntur consequatur vitae labore numquam enim similique ex corporis
				eveniet, adipisci repudiandae impedit ullam eligendi quos tempore autem!
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum minus
				repellendus a ea quibusdam vel dolore. Nam ipsum provident ex error, at
				numquam sunt. Corrupti eius, atque tempora facere rem libero quas
				consequuntur consequatur vitae labore numquam enim similique ex corporis
				eveniet, adipisci repudiandae impedit ullam eligendi quos tempore autem!
			</p>
		</div>
		<Footer />
		<LoginModal @on-login="onLogin" />
	</div>
</template>

<script>
import TopBar from "./components/TopBar.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import LoginModal from "./components/LoginModal.vue";
import "./assets/main.css";

export default {
	name: "App",
	components: {
		TopBar,
		Navbar,
		Footer,
		LoginModal,
	},
	data() {
		return {
			isLoggedIn: false,
		};
	},
};
</script>
