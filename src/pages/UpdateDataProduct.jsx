import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
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
		return (
			<div className="mt-28">
				<Loading />
			</div>
		);
	}
	return (
		<>
			<div className="text-center">
				<div className="mb-4 mobile:pt-44 text-slate-800 font-semibold text-lg pt-36">
					Edit Data Barang
				</div>
				<div className="w-64 m-auto ">
					<div className="mb-4">
						<input
							name="name"
							value={editData.name}
							onChange={onchange}
							type="text"
							className="rounded-lg w-full"
						/>
					</div>
					<div className="mb-4">
						<input
							name="price"
							value={editData.price}
							onChange={onchange}
							type="number"
							className="rounded-lg w-full"
						/>
					</div>
					<div className="flex justify-between w-full mt-10">
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
