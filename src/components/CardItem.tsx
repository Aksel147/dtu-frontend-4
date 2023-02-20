import './CardItem.css'
export default function CardItem(props: {item: Object, setQuantity: Function}) {
    return(
        <div class="item">
        <img src="https://images.bolia.com/cdn-cgi/image/background=%23f5f5f5,fit=pad,width=540,format=auto,height=405,quality=81/products/02-335-01_00004_angle.webp?v=1"
          width="20%" height="100%" class="image2" />
        <div class="itemText">
          <p class="pItemHeader">{props.item.name}</p>
          <p class="pItemPrice">{props.item.price} kr. </p>
        </div>
        <div class="amount">
          <label for="amount">Antal</label>
          <input type="number" id="quantity" name="quantity" min="1" max="10" value="1"></input>

        </div>
      </div>
    )
}