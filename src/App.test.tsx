import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe(App.name, () => {
	it('should render', () => {
		render(<App />);
		expect(screen.getByText('Min indkøbskurv')).toBeInTheDocument();
	});
});
