import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../assets/product.json';
import CartItem from '../components/CartItem';
import Item from '../models/Item';
import Product from '../models/Product';
import './Checkout.css';

export default function Checkout() {
	const navigate = useNavigate();

	function handleClick() {
		navigate('form');
	}

	const defaultShoppingCart = [
		{ productId: 'vitamin-c-500-250', quantity: 2, giftWrap: false },
		{ productId: 'kids-songbook', quantity: 1, giftWrap: true },
		{ productId: 'sugar-cane-1kg', quantity: 2, giftWrap: false },
	];
	const [shoppingCart, setShoppingCart] = useState<Item[]>(
		defaultShoppingCart.map((item) => ({
			...item,
			product: {
				...products.find((product) => product.id === item.productId),
				upsellProduct: products.find(
					(product) =>
						product.id ===
						products.find((product) => product.id === item.productId)
							?.upsellProductId
				),
			} as Product,
		}))
	);
	let subtotalCartPrice = shoppingCart.reduce(
		(a, v) => (a = reduceSubtotal(a, v)),
		0
	);

	function reduceSubtotal(a: number, v: Item): number {
		let totalPrice = v.product.price * v.quantity;
		return a + totalPrice;
	}

	function setItemQuantity(productId: string, quantity: number) {
		let realQty = quantity;
		if (realQty < 1) {
			realQty = 1;
		}
		if (realQty > 99) {
			realQty = 99;
		}
		let newCart = [...shoppingCart];
		const productIndex = newCart.findIndex(
			(item) => item.product?.id === productId
		);
		if (productIndex !== -1) {
			newCart[productIndex] = { ...newCart[productIndex], quantity: realQty };
		}
		setShoppingCart(newCart);
	}
	function rebate() {
		let quantityRebate = 0;
		shoppingCart.forEach((item: Item) => {
			if (item.quantity >= item.product.rebateQuantity) {
				quantityRebate += item.product.price * item.quantity * item.product.rebatePercent / 100;
			}
		});
		const totalCartPrice = subtotalCartPrice - quantityRebate;
		if (totalCartPrice > 300) {
			return quantityRebate + totalCartPrice * 0.1;
		} else {
			return quantityRebate;
		}
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
		newCart[productIndex] = {
			...newCart[productIndex],
			product: newCart[productIndex].product.upsellProduct,
		};
		setShoppingCart(newCart);
	}

	function getCart() {
		var currentCart = [];

		if(!(shoppingCart.length === 0)) {
			
		
		}
	}

	return (
		<div className="checkout">
			<div className="shopping-cart">
				<h2>Min indk??bskurv</h2>
				<div className="alert">
					<span
						className="closebtn"
					>
						&times;
					</span>
					<strong>10% Rabat!</strong> Bestil for over 300 DKK og f?? 10% rabat p??
					din ordre.
				</div>

				<hr />
				{shoppingCart.length === 0 && <>Kurven er tom</>}
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
							{subtotalCartPrice.toLocaleString('da-DK')} DKK
						</p>
					</div>
					<div className="placeOnLine">
						<p className="discount">Rabat: </p>
						<p className="discountRight"> -{rebate()} DKK</p>
					</div>
					<hr />
					<div className="placeOnLine">
						<p className="totalSum bold">Pris i alt (inkl. moms):</p>
						<p className="totalSumRight bold">
							{(subtotalCartPrice - rebate()).toLocaleString('da-DK')} DKK
						</p>
					</div>
				</div>

				<button className="pay" type="button" onClick={handleClick}>
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
