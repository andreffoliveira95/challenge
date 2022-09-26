import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BsArrowLeftShort } from 'react-icons/bs';
import { BiTask } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';

const Sidebar = () => {
	const [open, setOpen] = useState(true);

	const menus = [
		{ title: 'Home', icon: <AiOutlineHome /> },
		{ title: 'Tasks', icon: <FaTasks /> },
	];

	return (
		<div
			className={`bg-nokia-blue p-5 pt-8 h-screen w-20 ${
				open ? 'sm:w-72' : 'sm:w-20'
			} duration-500 relative flex flex-col item-center`}
		>
			<BsArrowLeftShort
				className={`bg-light-gray text-nokia-blue text-3xl rounded-full hidden absolute -right-3 top-9 border-2 border-nokia-blue cursor-pointer 
                ${!open && 'rotate-180'} duration-500 sm:block`}
				onClick={() => setOpen(!open)}
			/>

			<div className="inline-flex">
				<Link to="/">
					<BiTask
						className={`bg-amber-300 text-4xl rounded cursor-pointer mr-4 duration-500 ${
							open && 'rotate-[360deg]'
						}`}
					/>
				</Link>
				<h1
					className={`text-light-gray hidden sm:inline origin-left font-medium text-2xl mr-4 duration-500 ${
						!open && 'scale-0 opacity-0'
					}`}
				>
					ChallengeApp
				</h1>
			</div>

			<ul className="mt-6">
				{menus.map(menu => (
					<>
						<Link
							to={`${menu.title === 'Home' ? '/' : menu.title.toLowerCase()}`}
						>
							<li className="text-light-gray text-center text-lg flex justify-between cursor-pointer p-2 hover:bg-light-white rounded-md mt-12">
								<span className="text-2xl">{menu.icon}</span>
								<span
									className={`text-base item-center font-medium hidden sm:inline duration-300 ${
										!open && 'scale-0 opacity-0'
									}`}
								>
									{menu.title}
								</span>
								<span className="opacity-0">#</span>
							</li>
						</Link>
					</>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
