import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Outlet } from 'react-router';
const cookies = new Cookies();
const PrivatRoute = () => {
	const auth = cookies.get('auth');
	return auth ? <Outlet /> : <Navigate to={'/'} />;
};

export default PrivatRoute;
