import Vue from "vue";
import VueRouter from "vue-router";
// import jwt from "jsonwebtoken";

const Home = () => import("../pages/Home.vue");
const Login = () => import("../pages/Login.vue");
const About = () => import("../pages/About.vue");
const Brands = () => import("../pages/Brands.vue");
const Dogs = () => import("../pages/Dogs.vue");
const Cats = () => import("../pages/Cats.vue");
const SignUp = () => import("../pages/SignUp.vue");
const ProductDetail = () => import("../pages/ProductDetail.vue");

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
	{
		path: "/signup",
		name: "SignUp",
		component: SignUp,
	},
	{
		path: "/product/*",
		name: "ProductDetail",
		component: ProductDetail,
	},
	{ path: "*", redirect: "/" },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

// router.beforeEach((to, from, next) => {
// 	// check if token expires
// 	const token = localStorage.getItem("token");
// 	if (token) {
// 		const payload = jwt.decode(token);
// 		if (Date.now() >= payload.exp * 1000) {
// 			console.log("expired");
// 			localStorage.removeItem("token");
// 		}
// 	}

// 	next();
// });

export default router;
