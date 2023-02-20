import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <body>
      <div className='header'>
        <button>Toggle visual mode: Light</button>
      </div>
      <div className="checkout">

        <div className="total">
          <p className="summary">Ordrehistorik</p>

          <ul className="products">
            <li>(1) Stol - svanemærket et eller andet: <b>199 kr.</b></li>
            <br></br>
            <li>(1) Badering - Rød: <b>49 kr.</b></li>
            <br></br>
            <li>(1) Modelskib - Fra et eller andet fancy mærke: <b><s>499 kr</s> 349 kr.</b></li>

          </ul>
          <div className="paySection" >
            <p className="totalSum"><b>Ordretotal: 800 kr</b></p>
            <p className="discount">Rabat: -150 kr</p>
            <button className="pay" type="button">Betal</button>
          </div>
        </div>

        <h2><b>Min indkøbskurv</b></h2>
        <hr className="line" width="600px"></hr>
        <div className="item">
          <img src="https://images.bolia.com/cdn-cgi/image/background=%23f5f5f5,fit=pad,width=540,format=auto,height=405,quality=81/products/02-335-01_00004_angle.webp?v=1"
            width="20%" height="100%" className="image2" />
          <div className="itemText">
            <p className="pItemHeader">Stol - svanemærket et eller andet</p>
            <p className="pItemPrice">199 kr. </p>
          </div>
          <div className="amount">
            <label htmlFor="amount">Antal</label>
            <input type="number" id="quantity" name="quantity" min="1" max="10" value="1"></input>

          </div>
        </div>

        <br></br>
        <div className="item">
          <img src="https://productimages.biltema.com/v1/Image/product/xlarge/2000043931/4"
            width="20%" height="100%" className="image2" />
          <i className="fas fa-trash"></i>
          <div className="itemText">
            <p className="pItemHeader">Badering - Rød</p>
            <p className="pItemPrice">49 kr. </p>
          </div>
          <div className="amount">
            <label htmlFor="amount">Antal</label>
            <input type="number" id="quantity" name="quantity" min="1" max="10" value="1"></input>

          </div>
        </div>

        <br></br>
        <div className="item">
          <img src="https://www.lego.com/cdn/cs/set/assets/bltb94632aeb971eb91/10294.jpg?fit=bounds&format=jpg&quality=80&width=320&height=320&dpr=1"
            width="20%" height="100%" className="image2" />
          <div className="itemText">
            <p className="pItemHeader">Modelskib - Fra et eller andet fancy mærke</p>
            <p className="pItemPrice"><s>499 kr.</s> 349 kr. </p>
          </div>
          <div className="amount">
            <label htmlFor="amount">Antal</label>
            <input type="number" id="quantity" name="quantity" min="1" max="10" value="1"></input>

          </div>
        </div>
      </div>
    </body>


    /*<div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>*/
  )
}

export default App
