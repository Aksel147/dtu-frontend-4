import './CartItem.css'
import Item from '../models/Item'

export default function CartItem(props: { item: Item, setQuantity: Function, remove: Function }) {
    return (
        <div className="item">
            <div className='left-container'>
                <img src="https://images.bolia.com/cdn-cgi/image/background=%23f5f5f5,fit=pad,width=540,format=auto,height=405,quality=81/products/02-335-01_00004_angle.webp?v=1"
                    width="auto" height="100%" className="image2" />
                <div className="itemText">
                    <p className="pItemHeader">{props.item.product.name}</p>
                    <p className="pItemPrice">{props.item.product.price * props.item.quantity} {props.item.product.currency}</p>
                </div>
            </div>
            <div className='right-container'>
                <div className='itemText'>
                    <button onClick={() => { props.remove(props.item.product.id) }}>
                        slet
                    </button>
                    <div className='amount'>
                        <label>Antal</label>
                        <input type="number" min="1" max="100" value={props.item.quantity} onChange={(e) => { props.setQuantity(props.item.product.id, e.target.value) }} />
                    </div>
                </div>
            </div>
        </div>
    )
}