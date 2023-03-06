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
				<div className="alert">
  <span className="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>10% OFF!</strong> Make an order over 300 DKK and get 10% off your order.
</div>

				<hr />
				{shoppingCart.map((item) => (
					<CartItem
						key={item.product?.id}
						item={item}
						setQuantity={setItemQuantity}
						remove={removeItem}
						upsell={upsell}
					/>
				))}
			</div>

			<div className="total">
				<p className="summary">Ordre</p>

				<div className="summaryContainer">
					<div className="placeOnLine">
						<p className="totalSum">Subtotal:</p>
						<p className="totalSumRight">
							{totalCartPrice.toLocaleString('da-DK')} DKK
						</p>
					</div>
					<div className="placeOnLine">
						<p className="discount">Rabat: </p>
						<p className="discountRight"> -{rebate()} kr</p>
					</div>
					<hr />
					<div className="placeOnLine">
						<p className="totalSum">
							<b>Pris i alt (inkl. moms): </b>
						</p>
						<p className="totalSumRight">
							<b>
								{(totalCartPrice - 150).toLocaleString('da-DK')} DKK
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
