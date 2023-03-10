import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Form from './pages/Form';

export default function App() {
	return (
		<div className="App">
		<Routes>
		  <Route path="/" element={<Checkout />} />
		  <Route path="form" element={<Form />} />
		</Routes>
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