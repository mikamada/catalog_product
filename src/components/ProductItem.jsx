import React from 'react';

const ProductItem = ({ ...props }) => {
	const { id, img, name, price } = props.item;
	return (
		<div
			className="w-44 h-52 border-2 rounded-md relative overflow-hidden mb-3"
			key={props.item.id}
		>
			<img src={img} alt={name} />
			<div className="absolute top-0 right-0">
				<input
					type="checkbox"
					onClick={() => {
						props.onSelectedProduct(id);
					}}
				/>
			</div>
			<div className="w-full h-20 bg-black opacity-80 absolute bottom-0 p-1">
				<div>
					<p className="text-slate-100 font-medium">{name}</p>
					<p className="text-slate-100">IDR {price}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
