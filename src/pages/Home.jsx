import React from 'react';
import Header from '../components/Header';
import ListProduct from '../components/ListProduct';
import Loading from '../components/Loading';
import useGetDataProduct from '../hooks/useGetDataProduct';

const Home = () => {
	const { data, loading } = useGetDataProduct();

	if (loading) {
		return (
			<div className="absolute w-full h-full flex justify-center items-center">
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
