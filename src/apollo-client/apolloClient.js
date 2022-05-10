import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://patient-oryx-80.hasura.app/v1/graphql',
	cache: new InMemoryCache(),
	headers: {
		'x-hasura-admin-secret':
			'C3RD6eBErzpj4l2ML1cJTLQWKs8gPsHKptCZINn3ZMJK68HJ93i7PTFoeZfP3dcE',
	},
});

export default client;