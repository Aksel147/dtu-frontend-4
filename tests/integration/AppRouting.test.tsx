import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { expect, it } from 'vitest';
import App from '../../src/App';

it('click Betal button routes to form page', async () => {
	// Render App
	render(<App />, { wrapper: BrowserRouter });

	// Click Betal button and check if it routes to form page
	const betalButton = screen.getByText('Betal');
	await userEvent.click(betalButton);
	expect(screen.getByText('Leveringsadresse')).toBeInTheDocument();
});
