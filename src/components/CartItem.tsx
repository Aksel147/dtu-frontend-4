import Item from '../models/Item';
import './CartItem.css';

export default function CartItem(props: {
    item: Item;
    setQuantity: (id: string, val: number) => void;
    remove: (id: string) => void;
    upsell: (id: string) => void;
}) {
    let subtotalPrice = props.item.product.price * props.item.quantity;
    let totalPrice = subtotalPrice;
    if (props.item.quantity >= props.item.product.rebateQuantity) {
        totalPrice = subtotalPrice * (1 - props.item.product.rebatePercent / 100);
    }

    return (
        <div className='item-container'>
            <div className="item">
                <div className='left-container'>
                    <img src="https://images.bolia.com/cdn-cgi/image/background=%23f5f5f5,fit=pad,width=540,format=auto,height=405,quality=81/products/02-335-01_00004_angle.webp?v=1"
                        alt={props.item.product.name} width="120px" height="120px" className="image2" />
                    <div className="itemText">
                        <p className="pItemHeader">{props.item.product.name}</p>
                        <p className="pItemPrice">
                            <span style={{ textDecoration: subtotalPrice !== totalPrice ? 'line-through' : '' }}>
                                {subtotalPrice.toLocaleString('da-DK')} {props.item.product.currency}
                            </span>
                            {subtotalPrice !== totalPrice &&
                                <span className='reducedPrice'>
                                    {totalPrice.toLocaleString('da-DK')} {props.item.product.currency}
                                </span>
                            }
                        </p>
                    </div>
                </div>
                <div className='right-container'>
                    <div className='itemText'>
                        <button onClick={() => { props.remove(props.item.product.id) }}>
                            <img src="https://cdn-icons-png.flaticon.com/512/3917/3917378.png" alt="Skraldespand" width="23px" height="25px" />
                        </button>
                        {props.item.quantity < props.item.product.rebateQuantity &&
                            <div className='quantity-nudge'>
                                K??b {props.item.product.rebateQuantity - props.item.quantity} mere
                                og spar {props.item.product.rebatePercent}%!&nbsp;&nbsp;&nbsp;
                            </div>
                        }
                        <div className='amount'>
                            <label>Antal</label>
                            <input type="number" min="1" max="100" value={props.item.quantity} onChange={(e) => {
                                if ((parseInt(e.target.value) > 0 && parseInt(e.target.value) < 100) || e.target.value === "")
                                    props.setQuantity(props.item.product.id, parseInt(e.target.value))
                            }} />
                        </div>
                    </div>
                </div>
            </div>
            {props.item.product.upsellProduct &&
                <div className='upsell'>
                    <div>
                        <h4>Opgrader?</h4>
                        <b>{props.item.product.upsellProduct?.name}</b><br></br><br></br>
                        <b>{props.item.product.upsellProduct?.price} DKK</b>
                    </div>
                    <button id="chooseBtn" onClick={() => { props.upsell(props.item.product.id) }}>
                        V??lg
                    </button>
                </div>
            }

        </div>
    )
}