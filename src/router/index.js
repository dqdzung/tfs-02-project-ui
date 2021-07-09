import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import About from "../pages/About.vue";
import Brands from "../pages/Brands.vue";
import Dogs from "../pages/Dogs.vue";
import Cats from "../pages/Cats.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/brands",
		name: "Brands",
		component: Brands,
	},
	{
		path: "/dogs",
		name: "Dogs",
		component: Dogs,
	},
	{
		path: "/cats",
		name: "Cats",
		component: Cats,
	},
	{ path: "*", redirect: "/" },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

// router.beforeEach((to, from, next) => {
// 	// redirect to login page if not logged in
// 	const publicPages = ["/login", "/register"];
// 	const authRequired = !publicPages.includes(to.path);
// 	const loggedIn = localStorage.getItem("token");

// 	if (authRequired && !loggedIn) {
// 		return next("/login");
// 	}

// 	next();
// });

export default router;
