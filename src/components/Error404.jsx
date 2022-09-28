import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
	return (
		<section className="flex items-center w-screen bg-light-gray">
			<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
				<div className="max-w-md text-center">
					<h2 className="mb-8 font-extrabold text-9xl text-nokia-blue">404</h2>
					<p className="mt-4 mb-8 text-2xl font-semibold md:text-3xl">
						Sorry, find this page couldn't be found.
					</p>
					<Link
						to="/"
						className="px-8 py-3 font-semibold rounded bg-nokia-blue text-white"
					>
						Back to homepage
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Error404;
