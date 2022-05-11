import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useEditProduct from '../hooks/useEditDataProduct';

const UpdateDataProduct = (props) => {
	const location = useLocation();
	const { editAction, loadingEdit } = useEditProduct();

	const [editData, setEditData] = useState({
		name: location.state.name,
		price: location.state.price,
	});

	const onchange = (e) => {
		setEditData({
			...editData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = () => {
		editAction({
			variables: {
				id: location.state.id,
				name: editData.name,
				price: editData.price,
			},
		});
	};

	if (loadingEdit) {
		return <span>Loading...</span>;
	}
	return (
		<>
			<div className="text-center">
				<div className="mt-12 mb-4 text-slate-800 font-semibold text-lg">
					Edit Data Barang
				</div>
				<div className="w-64 m-auto ">
					<div className="mb-4">
						<input
							name="name"
							value={editData.name}
							onChange={onchange}
							type="text"
							className="rounded-lg"
						/>
					</div>
					<div className="mb-4">
						<input
							name="price"
							value={editData.price}
							onChange={onchange}
							type="number"
							className="rounded-lg"
						/>
					</div>
					<div className="flex justify-between w-full  px-4">
						<button className="px-5 py-2 bg-red-800 text-white font-medium text-lg rounded-md">
							Batal
						</button>
						<button
							className="px-5 py-2 bg-blue-800 text-white font-medium text-lg rounded-md right-0"
							onClick={handleSubmit}
						>
							Simpan
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default UpdateDataProduct;
