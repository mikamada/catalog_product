import React from 'react';
import ProductItem from './ProductItem';

const ListProduct = (props) => {
	return (
		<div className="container m-auto">
			<div className="text-slate-800 font-semibold text-lg mb-6">
				Semua Produk
			</div>
			<div className="w-full flex flex-wrap justify-between">
				{props.getListProduct.products.map((item) => (
					<ProductItem item={item} />
				))}
			</div>
		</div>
	);
};

export default ListProduct;
