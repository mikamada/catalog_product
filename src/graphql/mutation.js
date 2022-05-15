import { gql } from '@apollo/client';

export const DeleteProduct = gql`
	mutation MyMutation($id: uuid!) {
		delete_products_by_pk(id: $id) {
			id
		}
	}
`;

export const EditDataProduct = gql`
	mutation MyMutation($id: uuid, $name: String, $price: Int) {
		update_products(
			where: { id: { _eq: $id } }
			_set: { name: $name, price: $price }
		) {
			returning {
				id
				name
			}
		}
	}
`;

export const InsertMutation = gql`
	mutation MyMutation($img: String, $name: String, $price: Int) {
		insert_products_one(object: { img: $img, name: $name, price: $price }) {
			id
			img
			is_buy
			lots_item
			name
			price
		}
	}
`;
