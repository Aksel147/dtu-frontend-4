import { useState } from 'react';
import './App.css';
import products from './assets/product.json';
import CartItem from './components/CartItem';
import Item from './models/Item';
import Product from './models/Product';

function App() {
	const defaultShoppingCart = [
		{ productId: 'vitamin-c-500-250', quantity: 2, giftWrap: false },
		{ productId: 'kids-songbook', quantity: 1, giftWrap: true },
		{ productId: 'sugar-cane-1kg', quantity: 2, giftWrap: false },
	];
	const [shoppingCart, setShoppingCart] = useState<Item[]>(
		defaultShoppingCart.map(
			(item) =>
				({
					...item,
					product: products.find(
						(product) => product.id === item.productId
					) as Product,
				} as Item)
		)
	);

	function setItemQuantity(productId: string, quantity: number) {
		let newCart = [...shoppingCart];
		const productIndex = newCart.findIndex(
			(item) => item.product?.id === productId
		);
		if (productIndex !== -1) {
			newCart[productIndex].quantity = quantity;
		}
		setShoppingCart(newCart);
	}
	function isRebate() {
		let total = shoppingCart.reduce(
			(a, v) => (a = a + v.quantity * v.product?.price),
			0
		);

		if (total > 300) {
			return true;
		} else {
			return false;
		}
	}
	function rebate() {
		let total = shoppingCart.reduce(
			(a, v) => (a = a + v.quantity * v.product?.price),
			0
		);

		if (isRebate()) {
			return total * 0.1;
		} else {
			return 0;
		}
	}
	function returnTotal() {
		let total = shoppingCart.reduce(
			(a, v) => (a = a + v.quantity * v.product?.price),
			0
		);
		if (isRebate()) {
			return total * 0.9;
		} else {
			return shoppingCart.reduce((a, v) => (a = a + v.quantity * v.product?.price), 0);
		}
	}
	function rebateProductQuantity() {

	}

	function removeItem(productId: string) {
		let newCart = [...shoppingCart];
		const productIndex = newCart.findIndex(
			(item) => item.product?.id === productId
		);
		newCart.splice(productIndex, 1);
		setShoppingCart(newCart);
	}
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
						<p className="discountRight"> -{rebate()} DKK</p>
					</div>

					<hr />

					<div className="placeOnLine">
						<p className="totalSum">
							<b>Pris i alt (inkl. moms): </b>
						</p>
						<p className="totalSumRight">
							<b>
								{returnTotal()} DKK
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

export default App;

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
