// import axios from "axios";
// // import { authHeader } from "../helpers";

// const login = async (email, password) => {
// 	try {
// 		const res = await axios({
// 			method: "POST",
// 			url: "http://localhost:8081/api/auth/login",
// 			data: {
// 				email: email,
// 				password: password,
// 			},
// 			headers: {
// 				"Access-Control-Allow-Origin": "*",
// 			},
// 		});

// 		if (res.data.success) {
// 			localStorage.setItem("token", res.data.data.token);
// 		}
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

// const logout = () => {
// 	localStorage.removeItem("token");
// };

// // const getUser = async () => {
// // 	const res = await axios({
// // 		url: "http://localhost:8081/api/auth/",
// // 		headers: authHeader(),
// // 	});
// // 	if (res.data.success) {
// // 		return res.data.data;
// // 	}
// // 	return null;
// // };

// export default { login, logout };
