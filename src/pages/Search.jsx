import React, { useState } from 'react';
import Loading from '../components/Loading';
import useSearchProduct from '../hooks/useSearchProduct';

const Search = () => {
	const [nameProduct, setNameProduct] = useState({
		name: '',
	});

	const onchange = (e) => {
		setNameProduct({
			...nameProduct,
			[e.target.name]: e.target.value,
		});
	};
	const { onSearch, dataSearch, loadingSearch } = useSearchProduct();

	if (loadingSearch) {
		return (
			<div>
				<Loading />
			</div>
		);
	}
	return !dataSearch ? (
		<>
			<div className="container">
				<input
					type="text"
					name="name"
					value={nameProduct.name}
					onChange={onchange}
				/>
				<button
					onClick={() => {
						onSearch({
							variables: {
								name: nameProduct.name,
							},
						});
					}}
				>
					Search
				</button>
			</div>
		</>
	) : (
		<div>
			<div className="container">
				<input
					type="text"
					name="name"
					value={nameProduct.name}
					onChange={onchange}
				/>
				<button
					onClick={() => {
						onSearch({
							variables: {
								name: nameProduct.name,
							},
						});
					}}
				>
					Search
				</button>
			</div>
			{dataSearch.products.map((item) => (
				<div>
					<p>{item.name}</p>
					<p>{item.price}</p>
				</div>
			))}
		</div>
	);
};

export default Search;
