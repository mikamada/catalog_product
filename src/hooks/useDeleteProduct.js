import { GetDataProduct } from "../graphql/query";
import { DeleteProduct } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

export default function useDeleteProduct() {
	const [deleteAction, { loading: loadingDelete }] = useMutation(
		DeleteProduct,
		{ refetchQueries: [GetDataProduct] }
	);
	return {
		deleteAction,
		loadingDelete,
	};
}