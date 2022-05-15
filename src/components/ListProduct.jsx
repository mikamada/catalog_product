import React from 'react';
import ProductItem from './ProductItem';

const ListProduct = (props) => {
	return (
		<div className="container mobile:px-3 m-auto">
			<div className="text-slate-800 font-semibold text-lg mb-6 mt-12 ">
				Semua Produk
			</div>
			<div className="grid mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-6">
				{props.getListProduct.products.map((item) => (
					<ProductItem item={item} />
				))}
			</div>
		</div>
	);
};

export default ListProduct;
