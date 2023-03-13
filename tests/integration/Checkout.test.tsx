import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { expect, it } from 'vitest';
import App from '../../src/App';

it('check rebate on item: Rørsukker, 1000g', async () => {
	render(<App />, { wrapper: BrowserRouter });
	const quantityField = screen.getAllByDisplayValue(2)[1];
	const price = screen.getByText('80 DKK');

	await userEvent.clear(quantityField);
	await userEvent.type(quantityField, '4');

	expect(price).toHaveTextContent('120 DKK');
});

it('check upsell option on item: Rørsukker, 1000g ', async () => {
	render(<App />, { wrapper: BrowserRouter });

	const chooseButton = screen.getAllByText('vælg')[2];
	await userEvent.click(chooseButton);
	expect(screen.getByText('Rørsukker, økologisk, 1000g'));
});
