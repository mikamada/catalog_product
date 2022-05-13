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
		<div className="container m-auto right-0 p-3">
			<div className="text-slate-800 font-semibold text-lg mb-6 mt-12 ">
				Semua Produk
			</div>
			<div className="flex mobile:flex-wrap grid-cols-5 justify-between">
				{props.getListProduct.products.map((item) => (
					<ProductItem onSelectedProduct={handleSelect} item={item} />
				))}
			</div>
		</div>
	);
};

export default ListProduct;
