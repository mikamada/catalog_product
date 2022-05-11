import {useMutation} from '@apollo/client';
import { SelectProduct } from '../graphql/mutation';
import { GetDataProduct } from '../graphql/query';

export default function useSelectProduct() {
  const [selectAction, { loading: loadingOnSelect }] = useMutation(
		SelectProduct,
		{
			refetchQueries: [GetDataProduct],
		}
	);
  return{
    selectAction,
    loadingOnSelect
  }
}