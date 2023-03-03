import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Form from './pages/Form';

export default function App() {
	return (
		<div className="checkout">
			<div className="shopping-cart">
				<h2>
					<b>Min indkøbskurv</b>
				</h2>

				<hr />
				{shoppingCart.map((item) => (
					<CartItem
						key={item.product?.id}
						item={item}
						setQuantity={setItemQuantity}
						remove={removeItem}
					/>
				))}
			</div>

			<div className="total">
				<p className="summary">Ordre</p>

				<div className="summaryContainer">
					<div className="placeOnLine">
						<p className="totalSum">Subtotal: </p>
						<p className="totalSumRight">
							{shoppingCart.reduce(
								(a, v) => (a = a + v.quantity * v.product?.price),
								0
							)}{' '}
							DKK
						</p>
					</div>

					<div className="placeOnLine">
						<p className="discount">Rabat: </p>
						<p className="discountRight"> -150 kr</p>
					</div>

					<hr />

					<div className="placeOnLine">
						<p className="totalSum">
							<b>Pris i alt (inkl. moms): </b>
						</p>
						<p className="totalSumRight">
							<b>
								{shoppingCart.reduce(
									(a, v) => (a = a + v.quantity * v.product?.price),
									0
								) - 150}{' '}
								DKK
							</b>
						</p>
					</div>
				</div>

				<button className="pay" type="button">
					Betal
				</button>
			</div>
		</div>
	);
}

/*
const addItem = () => {
		var number = Math.round(Math.random() * 100);
		var item = data[number % data.length];
		items.push(item);
		setItems({ items: [...items] });

		newSubtotal = subtotal + item.price;
		setSubtotal(newSubtotal);

		const newTotal = newSubtotal + discount + shipping;
		setTotal(newTotal);
	};*/
