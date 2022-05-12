import { useLazyQuery } from '@apollo/client';
import { GetOnSearch } from '../graphql/query';

export default function useSearchProduct() {
	const [onSearch, { data: dataSearch, loading: loadingSearch }] =
		useLazyQuery(GetOnSearch);
	return {
		onSearch,
		dataSearch,
		loadingSearch,
	};
}
