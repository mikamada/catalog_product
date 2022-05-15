import { InsertMutation } from '../graphql/mutation';
import { useMutation } from '@apollo/client';
import { GetDataProduct } from '../graphql/query';
export default function useInserProduct() {
	const [insertProduct, { loading: loadingInsertProduct }] = useMutation(
		InsertMutation,
		{
			refetchQueries: [GetDataProduct],
		}
	);

	return {
		insertProduct,
		loadingInsertProduct,
	};
}
