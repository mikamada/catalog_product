import Home from './pages/Home';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo-client/apolloClient';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</ApolloProvider>
	);
}

export default App;
