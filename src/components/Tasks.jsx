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
				<section className="p-8 flex flex-col justify-center items-center w-screen min-h-screen">
					<h1 className="text-black origin-left font-medium text-2xl mb-4">
						Task List
					</h1>
					<ul className="mx-5 p-5 rounded-lg h-screen bg-white w-full">
						{tasks.map(task => {
							return <Task key={task.id} {...task} />;
						})}
					</ul>
				</section>
			</div>
		</>
	);
};

export default Tasks;
