import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import Error404 from '../Error404';

test('renders main error 404 message', () => {
	render(
		<BrowserRouter>
			<Error404 />
		</BrowserRouter>
	);
	const headerElement = screen.getByText(/404/);
	expect(headerElement).toBeInTheDocument();
});

test('renders page not found message', () => {
	render(
		<BrowserRouter>
			<Error404 />
		</BrowserRouter>
	);
	const textElement = screen.getByText(/couldn't be found/i);
	expect(textElement).toBeInTheDocument();
});

test('renders back to homepage button', () => {
	render(
		<BrowserRouter>
			<Error404 />
		</BrowserRouter>
	);
	const buttonElement = screen.getByText(/back to homepage/i);
	expect(buttonElement).toBeInTheDocument();
});
