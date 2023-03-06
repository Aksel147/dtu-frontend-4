import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import App from '../../src/App';
import Checkout from '../../src/pages/Checkout';

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
