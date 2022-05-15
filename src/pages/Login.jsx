import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
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
		return <div>Loading...</div>;
	}
	return (
		<div>
			<h1>Login</h1>
			<div>
				<input
					className="outline-2"
					type="text"
					name="name"
					placeholder="username"
					onChange={handleChangeName}
					autocomplete="off"
				/>
				<input
					className="outline-2"
					type="password"
					name="password"
					placeholder="password"
					onChange={handleChangePassword}
				/>
				{data && (
					<h3 className="text-red-700 font-light italic">
						username dan password salah
					</h3>
				)}
				<button className="border-2" onClick={onLogin}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Login;
