import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/Slices/cartSlice";

const Product = ( product ) => {
	const { cart } = useSelector((state) => state);
	const dispatch = useDispatch();
	const addToCart = () => {
		dispatch(add(product));
		toast.success("Item added to cart successfully!");
	};
	const removeFromCart = () => {
		dispatch(remove(product.id));
		toast.error("Item removed from cart successfully!");
	};
	return (
		<>
			<div className="flex flex-col gap-8 border-2 border-black rounded-2xl items-center justify-center p-4 w-72 mt-12 hover:scale-110 transition duration-300 ease-in">
				<div>
					<h1 className="text-gray-700 font-semibold text-center">
						{product.title.split(" ").slice(0, 5).join(" ") + "..."}
					</h1>
				</div>
				<p className="text-gray-400 font-normal text-xs text-center">
					{product.description.split(" ").slice(0, 10).join(" ") + "..."}
				</p>
				<div className="h-44">
					<img
						className="h-full w-full hover:scale-110 transition duration-300 ease-in"
						src={product.image}
						alt="Product"
					/>
				</div>
				<div className="flex justify-between items-center w-full mt-10">
					<span className="text-green-600 font-semibold">${product.price}</span>
					{cart && cart.some((p) => p.id === product.id) ? (
						<button
							onClick={removeFromCart}
							className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold  text-[12px] p-1 px-3 uppercase hover:bg-gray-700hover:text-white transition duration-300 ease-in"
						>
							Remove Item
						</button>
					) : (
						<button
							onClick={() => {
								addToCart();
							}}
							className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
						>
							Add to Cart
						</button>
					)}
				</div>
			</div>
		</>
	);
};

export default Product;
