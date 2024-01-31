import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
	const { cart } = useSelector((state) => state);
	return (
		<>
			<div className="bg-slate-900 h-20">
				<div className="w-11/12 h-full mx-auto flex items-center justify-between text-white">
					<Link to="/">
						<img className="h-14 " src={Logo} alt="Logo" />
					</Link>
					<div className="flex gap-6 items-center justify-center text-lg font-bold ">
						<Link className="hover:text-green-600 hover:scale-110 transition duration-200 ease-in " to="/">
							<span >Home</span>
						</Link>
						<Link className="hover:text-green-600 hover:scale-110 transition duration-200 ease-in " to="/cart">
							<div className="relative">
								<FaShoppingCart className="text-2xl" />
								{cart.length > 0 && (
									<span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
										{cart.length}
									</span>
								)}
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
