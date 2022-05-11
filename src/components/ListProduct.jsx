import React from 'react';
import ProductItem from './ProductItem';

const ListProduct = (props) => {
	return (
		<div className="container m-auto">
			<div className="text-slate-800 font-semibold text-lg mb-6">
				Semua Produk
			</div>
			<div className="grid grid-cols-5">
				{props.getListProduct.products.map((item) => (
					<ProductItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default ListProduct;
