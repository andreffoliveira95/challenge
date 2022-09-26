import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Home = () => {
	return (
		<>
			<Navbar />
			<div className="flex">
				<Sidebar />
				<div>Home</div>
			</div>
		</>
	);
};

export default Home;
