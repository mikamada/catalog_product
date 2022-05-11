import React from 'react';
import Header from '../components/Header';
import ListProduct from '../components/ListProduct';
import useGetDataProduct from '../hooks/useGetDataProduct';

const Home = () => {
	const { data, loading } = useGetDataProduct();

	if (loading) {
		return <span>loading...</span>;
	}
	return (
		<>
			<Header />
			<ListProduct getListProduct={data} />
		</>
	);
};

export default Home;
