import React from 'react';
import { Link } from 'react-router-dom';

import nokiaImg from '../assets/nokia-logo.png';

const Navbar = () => {
	return (
		<div className="w-screen h-[80px] bg-light-gray">
			<div className="px-2 flex justify-center items-center w-full h-full">
				<div className="flex items-center">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.nokia.com/"
					>
						<img className="w-40" src={nokiaImg} alt="logo" />
					</a>
				</div>
			</div>
			<hr className="border-nokia-blue border-2"></hr>
		</div>
	);
};

export default Navbar;
