import { EditDataProduct } from '../graphql/mutation';
import { useMutation } from '@apollo/client';
import { GetDataProduct } from '../graphql/query';

export default function useEditProduct() {
	const [editAction, { loading: loadingEdit }] = useMutation(EditDataProduct, {
		refetchQueries: [GetDataProduct],
	});
	return {
		editAction,
		loadingEdit,
	};
}
