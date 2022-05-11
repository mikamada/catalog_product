import React from 'react';
import Header from '../components/Header';
import ListProduct from '../components/ListProduct';
import useSelectProduct from '../hooks/useSelectProduct';
import useGetDataProduct from '../hooks/useGetDataProduct';

const Home = () => {
	const { data, loading } = useGetDataProduct();
	const { selectAction, loadingOnSelect } = useSelectProduct();

	const selectedProduct = (id) => {
		const selected = data.find((v) => v.id === id);
		selectAction({
			variables: {
				id: id,
				is_buy: !selected.is_buy,
			},
		});
	};

	if (loading || loadingOnSelect) {
		return <span>loading...</span>;
	}
	return (
		<>
			<Header />
			<ListProduct getListProduct={data} onSelectedProduct={selectedProduct} />
		</>
	);
};

export default Home;
