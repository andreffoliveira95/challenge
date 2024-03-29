import React from 'react';

const Home = () => {
	return (
		<>
			<section className="bg-light-gray p-5 pt-8 flex justify-center items-center text-center w-screen h-screen">
				<div data-testid="welcome">
					<h1 className="font-medium text-3xl sm:text-4xl mb-4">
						Hi 👋, I'm André!
					</h1>
					<p className="text-lg sm:text-2xl">
						And this is my solution to Nokia's challenge.
					</p>
				</div>
			</section>
		</>
	);
};

export default Home;
