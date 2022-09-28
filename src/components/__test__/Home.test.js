import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../Home';

test('renders main welcome text', () => {
	render(<Home />);
	const headingElement = screen.getByText(/andré/i);
	expect(headingElement).toBeInTheDocument();
});

test('renders sub-main text', () => {
	render(<Home />);
	const headingElement = screen.getByText(/Nokia's challenge/i);
	expect(headingElement).toBeInTheDocument();
});
