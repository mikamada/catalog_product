import React from 'react';
import { Link } from 'react-router-dom';
import searcIcon from '../assets/search.png';
const Header = () => {
	return (
		<>
			<nav className="w-full mobile:-top-1 tablet:top-0 bg-slate-800 fixed z-10">
				<div className="container mobile:px-3 h-20 m-auto flex items-center justify-between">
					<div className="flex items-center">
						<div className="logo text-slate-100 font-bold text-xl mr-5">
							Warungku
						</div>
						<div className="flex gap-4 nav-link">
							<Link to={'/'} className="text-slate-300">
								Home
							</Link>
							<Link to={'/dashboard'} className="text-slate-300 ">
								Dashboard
							</Link>
						</div>
					</div>
					<Link to={'/search'}>
						<div className="h-10 w-10 rounded-full relative bg-slate-800 overflow-hidden flex justify-center items-center cursor-pointer icon-search">
							<div className="w-6 h-6">
								<img src={searcIcon} alt="" />
							</div>
						</div>
					</Link>
				</div>
			</nav>
			<div className="h-20"></div>
		</>
	);
};

export default Header;
