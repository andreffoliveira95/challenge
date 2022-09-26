import React from 'react';

const Task = ({ text, completed }) => {
	return (
		<article className="border-b-8 border-white">
			<div
				className={`${
					completed ? 'bg-green-200' : 'bg-red-200'
				} rounded-lg text-left items-center justify-between`}
			>
				<h1 className="p-3 text-bold text-slate-800">{text}</h1>
			</div>
		</article>
	);
};

export default Task;
