import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ThreeDots from "./assets/svg/ThreeDots";

const Navbar = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const navMenuRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [navMenuRef]);

	return (
		<nav className="select-none flex items-center justify-between bg-brand-darkest p-4 fixed top-0 z-10 w-full h-16 border-b border-brand-lightest">
			<div
				className="items-center text-white hover:cursor-pointer"
				onClick={() => {
					navigate("/");
				}}
			>
				<span className="font-bold text-2xl tracking-wider">
					Writer's Block
				</span>
			</div>

			<div className="items-center justify-end lg:w-auto">
				<div className="relative">
					<button
						className="items-center p-3 border border-brand-lightest rounded text-brand-lightest hover:text-white hover:border-white"
						onClick={() => setIsOpen(!isOpen)}
					>
						<ThreeDots title={"Other Pages"}></ThreeDots>
					</button>

					<ul
						ref={navMenuRef}
						id="dropdown-menu"
						className={`absolute mt-1 right-0 w-44 py-2 bg-brand-darkest border border-brand-lightest text-brand-light rounded-md shadow-lg ${
							isOpen ? "" : "hidden"
						} `}
					>
						<li>
							<a
								onClick={() => {
									navigate("/");
									setIsOpen(false);
								}}
								className="block px-4 py-2 hover:bg-brand-light hover:text-brand-darkest hover:cursor-pointer"
							>
								Home
							</a>
						</li>
						<li>
							<a
								onClick={() => {
									navigate("/viewBook");
									setIsOpen(false);
								}}
								className="block px-4 py-2 hover:bg-brand-light hover:text-brand-darkest hover:cursor-pointer"
							>
								View Book
							</a>
						</li>
						<li>
							<a
								onClick={() => {
									navigate("/viewStoryChar");
									setIsOpen(false);
								}}
								className="block px-4 py-2 hover:bg-brand-light hover:text-brand-darkest hover:cursor-pointer"
							>
								View Character
							</a>
						</li>
						<li>
							<a
								onClick={() => {
									navigate("/viewPlace");
									setIsOpen(false);
								}}
								className="block px-4 py-2 hover:bg-brand-light hover:text-brand-darkest hover:cursor-pointer"
							>
								View Place
							</a>
						</li>
						<li>
							<a
								onClick={() => {
									navigate("/viewStorySetting");
									setIsOpen(false);
								}}
								className="block px-4 py-2 hover:bg-brand-light hover:text-brand-darkest hover:cursor-pointer"
							>
								View Story Setting
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
