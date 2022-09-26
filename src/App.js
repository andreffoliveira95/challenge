import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<>
			<Navbar />
			<hr className="border-dark-purple"></hr>
			<div className="flex">
				<Sidebar />
			</div>
		</>
	);
}

export default App;
