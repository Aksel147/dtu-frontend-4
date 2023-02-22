import { useState } from 'react'
import './App.css'
import products from './assets/product.json'
import CartItem from './components/CartItem'
import Item from './models/Item'
import Product from './models/Product'

function App() {
  const defaultShoppingCart = [
    { productId: "vitamin-c-500-250", quantity: 2, giftWrap: false },
    { productId: "kids-songbook", quantity: 1, giftWrap: true },
    { productId: "sugar-cane-1kg", quantity: 2, giftWrap: false },
  ];
  const [shoppingCart, setShoppingCart] = useState<Item[]>(defaultShoppingCart.map(item => (
    { ...item, product: products.find(product => product.id === item.productId) as Product } as Item
  )));

  function setItemQuantity(productId: string, quantity: number) {
    let newCart = [...shoppingCart];
    const productIndex = newCart.findIndex(item => item.product?.id === productId);
    if (productIndex !== -1) {
      newCart[productIndex].quantity = quantity;
    }
    setShoppingCart(newCart);
  }

  function removeItem(productId: string) {
    let newCart = [...shoppingCart];
    const productIndex = newCart.findIndex(item => item.product?.id === productId);
    newCart.splice(productIndex, 1)
    setShoppingCart(newCart);
  }

  return (
    <div className="checkout">
      <div className='shopping-cart'>
        <h2>
          <b>
            Min indkøbskurv
          </b>
        </h2>
        <hr />
        {shoppingCart.map(item => <CartItem key={item.product?.id} item={item} setQuantity={setItemQuantity} remove={removeItem} />)}
      </div>

      <div className="total">
        <p className="summary">Ordre</p>
        <p className="discount">Rabat: -150 kr</p>
        <p className="totalSum"><b>Ordretotal: {shoppingCart.reduce((a, v) => a = a + (v.quantity * v.product?.price), 0)} DKK</b></p>
        <button className="pay" type="button">Betal</button>
      </div>
    </div>
  )
}

export default App
