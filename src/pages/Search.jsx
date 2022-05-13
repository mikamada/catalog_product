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
			<div>
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
						className="bg-blue-700 text-white font-medium text-lg px-8 rounded-3xl"
					>
						Search
					</button>
				</div>
				{!dataSearch ? (
					''
				) : (
					<div className="mt-5 flex flex-wrap">
						{dataSearch.products.map((item) => (
							<>
								<div
									className="w-44 h-52 border-2 rounded-md relative overflow-hidden mb-3"
									key={item.id}
								>
									<img src={item.img} alt={item.name} />
									<div className="absolute top-0 right-0"></div>
									<div className="w-full h-20 bg-black opacity-80 absolute bottom-0 p-1">
										<div>
											<p className="text-slate-100 font-medium">{item.name}</p>
											<p className="text-slate-100">IDR {item.price}</p>
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
