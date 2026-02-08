"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
	const [menu, setMenu] = useState(false);
	return (
		<nav className="pt-4 px-2 lg:px-10 relative flex items-center  justify-between border-b-2 border-gray-800 pb-2">
			{/* Logo */}
			<div> 
				<Image className=" rounded-full" src={'/logo.png'} alt="SkillPath icon" height={70} width={70} />
				{/* <h1 className="font-bold text-3xl">
					<span className="text-secondary-dark">Skill</span>
					<span className="text-secondary-light">Path</span>
				</h1> */}
			</div>

			<FaBars onClick={() => setMenu(true)} className="text-3xl md:hidden " />

			{/* Sidebar */}
			<div
				className={`${!menu && "hidden"} md:hidden absolute right-0 top-0 bottom-0 bg-black/30 backdrop-blur-2xl border-2 border-white/20 shadow-xl h-dvh  w-53 z-2 `}
			>
				<FaTimes
					className="absolute cursor-pointer right-2 top-2 text-3xl text-secondary-dark"
					onClick={() => setMenu(false)}
				/>
				<div className="mt-18 ">
					<Link
						className="block hover:bg-primary hover:text-white transition-colors duration-500 pl-2 py-2 cursor-pointer"
						href={"/"}
					>
						<p className="font-medium">Home</p>
					</Link>
					<Link
						className="block hover:bg-primary hover:text-white transition-colors duration-500 pl-2 py-2 cursor-pointer"
						href={"/"}
					>
						<p className="font-medium">Explore</p>
					</Link>
				</div>
			</div>

			{/* Menu Bar */}
			<div className="flex gap-4 mr-10 max-md:hidden pr-10">
				<Link
					className='relative pb-2 after:content-[""] after:w-0 after:absolute after:bottom-0 after:left-0  after:h-1 after:bg-primary after:transition-all after:duration-500  cursor-pointer hover:after:w-full'
					href={"/"}
				>
					<p className="font-medium">Home</p>
				</Link>
				<Link
					className='relative pb-2 after:content-[""] after:w-0 after:absolute after:bottom-0 after:left-0  after:h-1 after:bg-primary after:transition-all after:duration-500  cursor-pointer hover:after:w-full'
					href={"/"}
				>
					<p className="font-medium">Explore</p>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
