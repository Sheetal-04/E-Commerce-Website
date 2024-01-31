import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import Layout from "./Components/Layout";
import Home, { loader as ProductLoader } from "./Pages/Home";
import Cart from "./Pages/Cart";
import { Toaster } from "react-hot-toast";

const routes = [
	<Route element={<Layout />}>
		<Route path="/" element={<Home />} loader={ProductLoader} />
		<Route path="/cart" element={<Cart />} />
	</Route>,
];

const router = createBrowserRouter(createRoutesFromElements(...routes));

function App() {
	return <RouterProvider router={router} />;
}
ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={Store}>
		<App />
		<Toaster />
	</Provider>
);
