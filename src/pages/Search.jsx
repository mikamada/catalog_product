import React, { useState } from 'react';
import Header from '../components/Header';
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
			<div className="mt-52">
				<Loading />
			</div>
		);
	}
	return (
		<>
			<Header />
			<div className="container m-auto mobile:px-3">
				<div className="pt-10 flex justify-between">
					<input
						type="text"
						name="name"
						value={nameProduct.name}
						onChange={onchange}
						className="w-full mr-5 rounded-3xl"
						placeholder="Cari produk"
					/>
					<button
						onClick={() => {
							onSearch({
								variables: {
									name: nameProduct.name,
								},
							});
						}}
						className="bg-blue-700 text-white font-medium text-lg px-8 rounded-3xl btn"
					>
						Search
					</button>
				</div>
				{!dataSearch ? (
					''
				) : (
					<div className="mt-10 grid mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-6">
						{dataSearch.products.map((item) => (
							<>
								<div
									className="w-44 h-56 rounded-md overflow-hidden mb-5 card"
									key={item.id}
								>
									<div className="w-full h-40 overflow-hidden">
										<img src={item.img} alt={item.name} />
									</div>
									<div className="absolute top-0 right-0"></div>
									<div className="w-full h-20 bg-white bottom-0 p-2">
										<div className="text-slate-800 px-2">
											<p className="font-medium text-ellipsis">{item.name}</p>
											<p className="font-light">IDR {item.price}</p>
										</div>
									</div>
								</div>
							</>
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default Search;
