import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Loading from '../components/Loading';
import useUserLogin from '../hooks/useUserLogin';

const cookies = new Cookies();
const Login = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState();
	const navigate = useNavigate();
	const { getData, data, loading } = useUserLogin();

	useEffect(() => {
		if (data?.auth.length === 1) {
			console.log('data', data);
			cookies.set('auth', true, { path: '/' });
			return navigate('/home');
		}
	});

	const handleChangeName = (e) => {
		setName(e.target.value);
	};

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const onLogin = () => {
		getData({
			variables: {
				name: name,
				password: password,
			},
		});
	};

	if (loading) {
		return (
			<div className="mt-52">
				<Loading />
			</div>
		);
	}
	return (
		<div className="min-h-screen antialiased py-6 flex flex-col justify-center mobile:py-12">
			<div className="relative py-3 mobile:max-w-xl mobile:m-auto">
				<span className="text-2xl font-light">Login to your account</span>
				<div className="mt-4 bg-white shadow-md rounded-lg">
					<div className="h-2 bg-indigo-400 rounded-lg"></div>
					<div className="px-8 py-6">
						<label className="block font-semibold">Username</label>
						<input
							type="text"
							placeholder="username"
							className="border -w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
							onChange={handleChangeName}
						/>
						<label className="block font-semibold mt-4">Password</label>
						<input
							type="password"
							placeholder="password"
							className="border -w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
							onChange={handleChangePassword}
						/>
						{data && (
							<h3 className="font-light text-red-700 italic">
								username dan password salah
							</h3>
						)}
						<div className="flex justify-end items-baseline">
							<button
								onClick={onLogin}
								type="submit"
								className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 btn"
							>
								Login
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
