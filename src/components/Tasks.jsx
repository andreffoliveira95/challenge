import { useEffect, useState } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Task from './Task';

const url = 'http://localhost:8080/api/tasks/';

const Tasks = () => {
	const [tasks, setTasks] = useState([]);

	const fetchTasks = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
			setTasks(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTasks();
		const interval = setInterval(() => {
			fetchTasks();
		}, 60000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<Navbar />
			<div className="flex">
				<Sidebar />
				<section className="top-20 bg-light-gray w-screen h-screen px-8 sm:px-12 flex flex-col justify-center items-center">
					<h1 className="text-black origin-left font-medium text-2xl text-center mt-8 mb-6">
						Task List
					</h1>
					<div className="w-full h-full overflow-y-scroll scroll scrollbar-hide">
						<div className="p-2 sm:px-10 inline-block rounded-lg h-screen bg-light-gray w-full">
							{tasks.map(task => {
								return <Task key={task.id} {...task} />;
							})}
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Tasks;
