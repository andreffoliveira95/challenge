import React from 'react';

const Task = ({ text, completed }) => {
	return (
		<article className="border-b-8 border-white">
			<div
				className={`${
					completed ? 'bg-green-200' : 'bg-red-200'
				} p-3 rounded-lg flex text-left items-center justify-between`}
			>
				<h1 className="text-slate-800 font-semibold font-mono">
					{`${
						completed
							? text + ' - Task completed'
							: text + ' - Task to be completed'
					}`}
				</h1>
				<h1 className="text-md">{`${completed ? '✔️' : '❌'}`}</h1>
			</div>
		</article>
	);
};

export default Task;
