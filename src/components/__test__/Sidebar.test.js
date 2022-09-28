import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from '../Sidebar';

test('renders challenge app logo', () => {
	render(
		<BrowserRouter>
			<Sidebar />
		</BrowserRouter>
	);
	const appLogoElement = screen.getByTestId('app-logo');
	expect(appLogoElement).toBeInTheDocument();
});

test('renders challenge app text', () => {
	render(
		<BrowserRouter>
			<Sidebar />
		</BrowserRouter>
	);
	const appTextElement = screen.getByText(/^ChallengeApp$/);
	expect(appTextElement).toBeInTheDocument();
});

test('renders only home and tasks sub-menus', () => {
	render(
		<BrowserRouter>
			<Sidebar />
		</BrowserRouter>
	);
	const menusList = screen.getAllByRole('listitem');
	expect(menusList).toHaveLength(2);
});

test('renders sidebar home sub-menu text', () => {
	render(
		<BrowserRouter>
			<Sidebar />
		</BrowserRouter>
	);
	const homeMenuElement = screen.getByText(/^Home$/);
	expect(homeMenuElement).toBeInTheDocument();
});

test('renders sidebar tasks sub-menu', () => {
	render(
		<BrowserRouter>
			<Sidebar />
		</BrowserRouter>
	);
	const tasksMenuElement = screen.getByText(/^Tasks$/);
	expect(tasksMenuElement).toBeInTheDocument();
});

test('renders open-close button', () => {
	render(
		<BrowserRouter>
			<Sidebar />
		</BrowserRouter>
	);
	const openCloseButton = screen.getByTestId('open-close');
	expect(openCloseButton).toBeInTheDocument();
});
