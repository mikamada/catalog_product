import React from 'react';
import deleteIcon from '../assets/deleteIcon.png';
import editIcon from '../assets/editIcon.png';
const EditItem = ({ ...props }) => {
	const { id, img, name, price } = props.item;
	return (
		<div className="w-[70%] h-20 border-2 rounded-md mb-3 flex items-center justify-between overflow-hidden pr-4">
			<div className="flex items-center ">
				<div className="w-20 h-full overflow-hidden rounded-md">
					<img src={img} alt={name} />
				</div>
				<div>
					<p>{name}</p>
					<p>IDR {price}</p>
				</div>
			</div>
			<div className="flex items-center gap-4">
				<div className="h-7 w-7">
					<img src={editIcon} />
				</div>
				<div
					className="h-7 w-7 cursor-pointer"
					onClick={() => {
						props.onDelete(id);
					}}
				>
					<img src={deleteIcon} />
				</div>
			</div>
		</div>
	);
};

export default EditItem;
