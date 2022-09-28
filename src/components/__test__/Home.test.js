import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../Home';

test('renders main welcome text', () => {
	render(<Home />);
	const divElement = screen.getByTestId('welcome');
	expect(divElement).toBeInTheDocument();
});
