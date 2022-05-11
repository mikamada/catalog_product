import React from 'react';
import ProductItem from './ProductItem';
import useSelectProduct from '../hooks/useSelectProduct';

const ListProduct = (props) => {
	const { is_buy } = props.getListProduct;
	const { selectAction, loadingOnSelect } = useSelectProduct();

	const handleSelect = (id) => {
		selectAction({
			variables: {
				id: id,
				is_buy: !is_buy,
			},
		});
	};

	if (loadingOnSelect) {
		return <span>Loading...</span>;
	}
	return (
		<div className="container m-auto">
			<div className="text-slate-800 font-semibold text-lg mb-6">
				Semua Produk
			</div>
			<div className="grid grid-cols-5">
				{props.getListProduct.products.map((item) => (
					<ProductItem onSelectedProduct={handleSelect} item={item} />
				))}
			</div>
		</div>
	);
};

export default ListProduct;
