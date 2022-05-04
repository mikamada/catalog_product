import React from 'react';
import IconSearch from '../assets/IconSearch';

const Navbar = () => {
	return (
		<div className="flex items-center justify-between w-full h-20 bg-cyan-100 border-b-2 px-36">
			<div className="flex items-center">
				<span className="text-2xl font-bold mr-5">warungku</span>
				<ul className="flex gap-4">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Dashboard</a>
					</li>
				</ul>
			</div>
			<div>
				<div className="">
					<input
						type="text"
						placeholder=" Search"
						className="outline-none focus:outline-zinc-600 rounded-lg h-8 transition-all ease-out"
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
