import React from "react";
import { useLoaderData } from "react-router-dom";
import { getProductsData } from "../Api";
import Product from "../Components/Product";

export function loader() {
	return getProductsData();
}

const Home = () => {
	const Products = useLoaderData();
	console.log(Products);

	return (
		<>
			<div>
				<div className="w-11/12 flex flex-wrap justify-center mx-auto gap-10">
					{Products.length > 0 ? (
						Products.map((product, index) => (
							<Product key={index} {...product} />
						))
					) : (
						<p>SORRY ! NO PRODUCTS AVAILABLE</p>
					)}
				</div>
			</div>
		</>
	);
};

export default Home;
