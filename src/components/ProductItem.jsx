import React from 'react';

const ProductItem = (props) => {
	return (
		<div
			className="w-44 h-52 border-2 rounded-md relative overflow-hidden mb-3"
			key={props.item.id}
		>
			<img src={props.item.img} alt={props.item.name} />
			<div className="absolute top-0 right-0">
				<input type="checkbox" onClick={props.onSelectedProduct} />
			</div>
			<div className="w-full h-20 bg-black opacity-80 absolute bottom-0 p-1">
				<div>
					<p className="text-slate-100 font-medium">{props.item.name}</p>
					<p className="text-slate-100">IDR {props.item.price}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
