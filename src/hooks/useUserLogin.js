import { UserLogin } from '../graphql/query';
import { useLazyQuery } from '@apollo/client';

export default function useUserLogin() {
	const [getData, { data, loading }] = useLazyQuery(UserLogin);
	return {
		getData,
		data,
		loading,
	};
}
