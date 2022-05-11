import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<>
			<Header />
			<div className="container m-auto">
				<div className="text-slate-800 font-semibold text-lg mb-6">
					Dashboard
				</div>
				<div className="grid grid-cols-3 ">
					<Link to={'/dashboard/edit-product'}>
						<div className="w-60 h-40 bg-slate-500 flex items-center justify-center cursor-pointer menu-box rounded-md">
							<div className="text-white font-semibold text-xl  ">
								Edit Product
							</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
