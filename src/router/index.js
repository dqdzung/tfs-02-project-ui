import Vue from "vue";
import VueRouter from "vue-router";
// import jwt from "jsonwebtoken";

const Home = () => import("../pages/Home.vue");
const Login = () => import("../pages/LoginPage.vue");
const About = () => import("../pages/About.vue");
const Brands = () => import("../pages/Brands.vue");
const Dogs = () => import("../pages/Dogs.vue");
const Cats = () => import("../pages/Cats.vue");
const SignUp = () => import("../pages/SignUp.vue");
const ProductDetail = () => import("../pages/ProductDetail.vue");
const Cart = () => import("../pages/Carts.vue");

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
		beforeEnter: (to, from, next) => {
			if (localStorage.getItem("token")) {
				next(from);
				alert("You are already logged in!");
			}
		},
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
	{
		path: "/cart",
		name: "Cart",
		component: Cart,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	// Scroll to top on route change
	window.scrollTo(0, 0);
	next();
});

export default router;
