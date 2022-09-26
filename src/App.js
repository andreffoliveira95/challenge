import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Tasks from './components/Tasks';
import Error404 from './components/Error404';

function App() {
	return (
		<div className="w-full h-full">
			<Router>
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
			</Router>
		</div>
	);
}

export default App;
