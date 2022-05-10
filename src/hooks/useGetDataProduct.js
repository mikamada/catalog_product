import { useQuery } from '@apollo/client';
import { GetDataProduct } from '../graphql/query';

export default function useGetDataProduct() {
	const { data, loading } = useQuery(GetDataProduct);
	return {
		data,
		loading,
	};
}
