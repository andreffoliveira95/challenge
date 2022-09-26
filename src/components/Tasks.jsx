import { useEffect, useState } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Loading from './Loading';
import Task from './Task';

const url = 'http://localhost:8080/api/tasks/';

const Tasks = () => {
	const [loading, setLoading] = useState(false);
	const [tasks, setTasks] = useState([]);
	const [index, setIndex] = useState(0);

	const fetchTasks = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			const task = data[index];
			console.log(task);
			setIndex(index + 1);
			setTasks([...tasks, task]);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	if (loading) {
		return <Loading />;
	}

	return (
		<>
			<Navbar />
			<div className="flex">
				<Sidebar />
				<section className="p-5 pt-8 text-center w-full min-h-screen min-w-max">
					<h1 className="text-black origin-left font-medium text-2xl mb-4">
						Task List
					</h1>
					<ul className="mx-5 p-5 rounded-lg h-screen bg-white">
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
