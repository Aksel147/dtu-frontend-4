import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="checkout">

    <div class="item">
      <img src="https://images.bolia.com/cdn-cgi/image/background=%23f5f5f5,fit=pad,width=540,format=auto,height=405,quality=81/products/02-335-01_00004_angle.webp?v=1" width = "80px" height="80px"/>
      <p class= "pItemHeader">Stol</p>
      <p class="pItemPrice">Pris: </p>
    </div>

    <div class="total">
      <p class="headerTotal">Total</p>

      <p class="totalSum">Sum: </p>
    </div>

    </div>
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
