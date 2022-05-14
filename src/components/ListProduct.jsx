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
		<div className="container mobile:px-4 tablet:px-0 m-auto">
			<div className="text-slate-800 font-semibold text-lg mb-6 mt-12 ">
				Semua Produk
			</div>
			<div className="grid mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5">
				{props.getListProduct.products.map((item) => (
					<ProductItem onSelectedProduct={handleSelect} item={item} />
				))}
			</div>
		</div>
	);
};

export default ListProduct;
