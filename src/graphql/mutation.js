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
  update_products(where: {id: {_eq: $id}}, _set: {name: $name, price: $price}) {
    returning {
      id
      name
    }
  }
}
`;