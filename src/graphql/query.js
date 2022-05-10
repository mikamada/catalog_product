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
