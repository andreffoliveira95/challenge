import React from 'react';

import nokiaImg from '../assets/nokia-logo.png';

const Navbar = () => {
	return (
		<div className="w-full h-full bg-light-gray">
			<div className="px-2 flex justify-center items-center w-full h-full">
				<div className="flex items-center">
					<a
						data-testid="nokia-logo"
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
