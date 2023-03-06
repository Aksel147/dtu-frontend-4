import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import App from './App';
import Checkout from './pages/Checkout';

describe(App.name, () => {
	it('should render', () => {
		render(
			<MemoryRouter initialEntries={['/pages/Checkout']}>
				<Checkout></Checkout>
			</MemoryRouter>
		);
		expect(screen.getByText('Min indkøbskurv')).toBeInTheDocument();
	});
});
