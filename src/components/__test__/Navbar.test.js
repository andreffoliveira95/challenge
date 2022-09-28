import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navbar from '../Navbar';

test('renders nokia-logo', () => {
	render(<Navbar />);
	const imageElement = screen.getByRole('img');
	expect(imageElement).toHaveAttribute('src', 'nokia-logo.png');
});

test('checks if nokia-logo link is correct', () => {
	render(<Navbar />);
	const linkElement = screen.getByTestId('nokia-logo');
	expect(linkElement).toHaveAttribute('href', 'https://www.nokia.com/');
});
