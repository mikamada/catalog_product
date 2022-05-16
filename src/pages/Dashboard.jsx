import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<>
			<Header />
			<div className="container m-auto mobile:px-3">
				<div className="text-slate-800 font-semibold text-lg mb-6 mt-12">
					Dashboard
				</div>
				<div className="flex flex-wrap gap-5 mobile:justify-center tablet:justify-start">
					<Link to={'/dashboard/edit-product'}>
						<div className="w-64 h-40 bg-slate-500 flex items-center justify-center cursor-pointer menu-box rounded-md mb-5">
							<div className="text-white font-semibold text-xl  ">
								Edit Produk
							</div>
						</div>
					</Link>
					<Link to={'/dashboard/insert-product'}>
						<div className="w-64 h-40 bg-slate-500 flex items-center justify-center cursor-pointer menu-box rounded-md mb-5">
							<div className="text-white font-semibold text-xl  ">
								Tambah Barang
							</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
