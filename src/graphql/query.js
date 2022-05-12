import { gql } from '@apollo/client';

export const GetDataProduct = gql`
	query MyQuery {
		products {
			id
			name
			price
			img
			is_buy
			lots_item
		}
	}
`;

export const GetOnSearch = gql`
	query MyQuery($name: String!) {
		products(where: { name: { _eq: $name } }) {
			id
			name
			img
			is_buy
			lots_item
			price
		}
	}
`;
