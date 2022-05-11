import Home from './pages/Home';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo-client/apolloClient';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Caseer from './pages/Caseer';
import Dashboard from './pages/Dashboard';
import EditProduct from './pages/EditProduct';

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/caseer" element={<Caseer />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path='/dashboard/edit-product' element={<EditProduct/>} />
				</Routes>
			</Router>
		</ApolloProvider>
	);
}

export default App;
