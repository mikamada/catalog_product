import React from 'react';
import useGetDataProduct from '../hooks/useGetDataProduct';

import useDeleteProduct from '../hooks/useDeleteProduct';

import ListItem from '../components/ListItem';
import Loading from '../components/Loading';
import Header from '../components/Header';
const EditProduct = () => {
	const { deleteAction, loadingDelete } = useDeleteProduct();
	const { data, loading } = useGetDataProduct();

	const handleDelete = (id) => {
		deleteAction({
			variables: { id: id },
		});
	};

	if (loading || loadingDelete) {
		return (
			<div className="absolute w-full h-full flex justify-center items-center">
				<Loading />
			</div>
		);
	}
	return (
		<>
			<Header />
			<div className="container mobile:px-3 m-auto mt-10">
				<div className="text-slate-800 font-semibold text-lg mb-6">
					Semua Produk
				</div>
				{data.products.map((item) => (
					<ListItem item={item} onDelete={handleDelete} />
				))}
			</div>
		</>
	);
};

export default EditProduct;
