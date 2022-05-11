import { gql } from '@apollo/client';

export const SelectProduct = gql`
	mutation MyMutation($id: uuid, $is_buy: boolean) {
		update_products_by_pk(pk_columns: { id: $id }, _set: { is_buy: $is_buy }) {
			id
			is_buy
		}
	}
`;

export const DeleteProduct = gql`
	mutation MyMutation($id: uuid!) {
		delete_products_by_pk(id: $id) {
			id
		}
	}
`;
