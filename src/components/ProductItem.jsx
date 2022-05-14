import React from 'react';

const ProductItem = ({ ...props }) => {
	const { id, img, name, price } = props.item;
	return (
		<div className="w-44 h-56 rounded-md overflow-hidden mb-5 card" key={id}>
			<div className="w-full h-40 overflow-hidden">
				<img src={img} alt={name} />
			</div>
			<div className="absolute top-0 right-0"></div>
			<div className="w-full h-20 bg-white bottom-0 p-2">
				<div className="text-slate-800 px-2">
					<p className="font-medium text-ellipsis">{name}</p>
					<p className="font-light">IDR {price}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
