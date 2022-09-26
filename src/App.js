import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Tasks from './components/Tasks';
import Error404 from './components/Error404';

function App() {
	return (
		<Router>
			<Navbar />
			<div className="flex">
				<Sidebar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/tasks">
						<Tasks />
					</Route>
					<Route path="*">
						<Error404 />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
