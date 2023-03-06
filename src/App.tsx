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
				product: {
					...products.find((product) => product.id === item.productId), 
					upsellProduct: products.find((product) => product.id === products.find((product) => product.id === item.productId)?.upsellProductId)
				} as Product,
			} as Item)
		)
	);
	let totalCartPrice = shoppingCart.reduce((a, v) => (a = reduceCartPrice(a, v)), 0);

	function reduceCartPrice(a: number, v: Item): number {
		let totalPrice = v.product.price * v.quantity;
		if (v.quantity >= v.product.rebateQuantity) {
			totalPrice = totalPrice * (1 - v.product.rebatePercent / 100);
		}
		return a + totalPrice;
	}

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

	function removeItem(productId: string) {
		let newCart = [...shoppingCart];
		const productIndex = newCart.findIndex(
			(item) => item.product?.id === productId
		);
		newCart.splice(productIndex, 1);
		setShoppingCart(newCart);
	}

	function upsell(productId: string) {
		let newCart = [...shoppingCart];
		const productIndex = newCart.findIndex(
			(item) => item.product?.id === productId
		);
		newCart[productIndex] = { ...newCart[productIndex], product: newCart[productIndex].product.upsellProduct }
		setShoppingCart(newCart);
	}

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
						<p className="discountRight"> -150 kr</p>
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
