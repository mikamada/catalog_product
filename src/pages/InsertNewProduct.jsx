import React, { useEffect, useState } from 'react';
import { storage } from '../firebase/firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import useInserProduct from '../hooks/useInsertProduct';
import Loading from '../components/Loading';

const Dashboard = () => {
	const [imageUpload, setImageUpload] = useState(null);

	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [imageList, setImageList] = useState([]);
	const { insertProduct, loadingInsertProduct } = useInserProduct();

	const imageListRef = ref(storage, 'images/');
	const uploadImage = async () => {
		if (imageUpload == null) return;
		const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
		const snapshot = await uploadBytes(imageRef, imageUpload);
		const downloadUrl = await getDownloadURL(snapshot.ref);
		console.log(downloadUrl);

		insertProduct({
			variables: {
				img: downloadUrl,
				name: name,
				price: price,
			},
		});
	};

	useEffect(() => {
		listAll(imageListRef).then((respone) => {
			respone.items.forEach((item) => {
				getDownloadURL(item).then((url) => {
					setImageList((prev) => [...prev, url]);
				});
			});
		});
	});

	if (loadingInsertProduct) {
		return <Loading />;
	}
	return (
		<div className="container">
			<div>
				<div>
					<input
						type="file"
						onChange={(event) => {
							setImageUpload(event.target.files[0]);
						}}
					/>
					<input
						type="text"
						onChange={(e) => setName(e.target.value)}
						placeholder="name"
					/>
					<input
						type="number"
						onChange={(e) => setPrice(e.target.value)}
						placeholder="price"
					/>
					<button onClick={uploadImage}>Tambah Barang</button>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
