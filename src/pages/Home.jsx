import React from 'react';
import Header from '../components/Header';
import ListProduct from '../components/ListProduct';
import Loading from '../components/Loading';
import useGetDataProduct from '../hooks/useGetDataProduct';

const Home = () => {
	const { data, loading } = useGetDataProduct();

	if (loading) {
		return (
			<div className="mt-28">
				<Loading />
			</div>
		);
	}
	return (
		<>
			<Header />
			<ListProduct getListProduct={data} />
		</>
	);
};

export default Home;
