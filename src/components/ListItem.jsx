import React from 'react';
import deleteIcon from '../assets/deleteIcon.png';
import editIcon from '../assets/editIcon.png';
import { useLinkClickHandler } from 'react-router-dom';
const ListItem = ({ ...props }) => {
	const { id, img, name, price } = props.item;

	const handleEditClick = useLinkClickHandler(`/dashboard/edit-product/${id}`, {
		state: props.item,
	});

	return (
		<div className="w-full h-20 rounded-md mb-3 flex items-center justify-between overflow-hidden pr-4 bg-white">
			<div className="flex items-center ">
				<div className="w-20 h-full overflow-hidden rounded-md">
					<img src={img} alt={name} />
				</div>
				<div>
					<p>{name}</p>
					<p>IDR {price}</p>
				</div>
			</div>
			<div className="flex items-center gap-5">
				<div className="h-7 w-7 cursor-pointer" onClick={handleEditClick}>
					<img src={editIcon} alt="icon-edit" />
				</div>
				<div
					className="h-7 w-7 cursor-pointer"
					onClick={() => {
						props.onDelete(id);
					}}
				>
					<img src={deleteIcon} alt="icon-delete" />
				</div>
			</div>
		</div>
	);
};

export default ListItem;
