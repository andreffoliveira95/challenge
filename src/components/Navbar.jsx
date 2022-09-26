import React from 'react';
import nokiaImg from '../assets/nokia-logo.png';

const Navbar = () => {
	return (
		<div className="w-screen h-[80px]">
			<div className="px-2 flex justify-center items-center w-full h-full">
				<div className="flex items-center">
					<img className="w-40" src={nokiaImg} alt="logo" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
