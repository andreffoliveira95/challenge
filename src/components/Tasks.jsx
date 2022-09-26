import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Tasks = () => {
	return (
		<>
			<Navbar />
			<div className="flex">
				<Sidebar />
				<div>Tasks</div>
			</div>
		</>
	);
};

export default Tasks;
