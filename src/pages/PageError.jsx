import React from 'react';
import ErrorImage from '../assets/error.png';
import { useNavigate } from 'react-router-dom';
const PageError = () => {
	const navigate = useNavigate();
	return (
		<div className="absolute w-full h-full flex flex-col justify-center items-center">
			<div className="h-1/2 w-1/2 overflow-hidden">
				<img src={ErrorImage} alt="" />
			</div>
			<button
				className="py-2 px-4 bg-blue-600 hover:bg-blue-700 btn rounded-md text-white font-medium text-lg"
				onClick={() => {
					navigate('/catalog');
				}}
			>
				Back to catalog
			</button>
		</div>
	);
};

export default PageError;
