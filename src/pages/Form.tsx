import "./Form.css";
import { useState } from "react";
import zipCodes from '../assets/postnumre.json';

export default function Form() {
  const [sameAsDeliveryAdress, setCheck] = useState(true);


  const [zipCode,setZipCode] = useState('');
  const [city,setCity] = useState('');

  const [zipCodeValid,setZipCodeValid] = useState(false);

  /*
  const [state, setState] = useState({
    deliveryCountry: "",
    deliveryZipCode: "",
    deliveryCity: "",
    deliveryAddressLine1: "",
    deliveryAddressLine2: "",
    deliveryName: "",
    deliveryPhone: "",
    deliveryEmail: "",
    deliveryCompanyName: "",
    deliveryCompanyVAT: "",
    billingCountry: "",
    billingZipCode: "",
    billingCity: "",
    billingAddressLine1: "",
    billingAddressLine2: "",
    billingName: "",
    billingPhone: "",
    billingEmail: "",
    billingCompanyName: "",
    billingCompanyVAT: "",
  }); 

  const onChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  */
  var form = document.querySelector('form')

  const checkZipCode = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    
    const zipCode = zipCodes.find((zipCode) => zipCode.nr === value);
    if(zipCode !== undefined){
      setZipCode(zipCode.nr);
      setCity(zipCode.navn);
      setZipCodeValid(true);
      console.log(zipCodeValid);
    } else {
      setZipCode('');
      setCity('');
      setZipCodeValid(false);
      console.log(zipCodeValid);
    }
  };

  function handleSubmit(event: any) {
    const target = event.target;
    const name = target.name;
    let error = '';
    console.log("name");

    if (!target.value) {
      error = 'By skal udfyldes via postnummer'
    }
    
    if(city===''){
      error = 'Postnummer er ikke gyldigt'
      event.preventDefault();
    }

    // this.state.inputs[idx] = {
    //   ...this.state.inputs[idx],
    //    value: target.value,
    //   error
    // }

    // this.setState({
    //   inputs: [...this.state.inputs]
    // });
  }

  

  return (
    <div className="formBody">
      <div className="form">
        <form onSubmit={handleSubmit}>
        

          <h1>Leveringsadresse</h1>
          <select
            className="input-font"
            id="deliveryCountry"
            name="deliveryCountry"
            placeholder="Land"
            autoComplete="{false}"
          >
            <option value="Denmark" selected>
              Danmark
            </option>
          </select>
          
          {/* <select
            className="input-font"
            id="deliveryZipCode"
            name="deliveryZipCode"
            placeholder="Postnr"
            autoComplete="{false}"
          >
            {zipCodes.map((zipCode) => (
              <option value={zipCode.nr} key={zipCode.nr}>
                {zipCode.nr}
              </option>
            ))}
          </select> */}

          <input
            className={zipCodeValid ? 'input-font' : 'error-control'}
            type="text"
            name="deliveryZipCode"
            placeholder="Postnr"
            maxLength={4}
            onChange={checkZipCode}
            required
          />

          <input
            className="input-font read-only"
            type="text"
            name="deliveryCity"
            placeholder="By"
            value={city}
            required
            readOnly
            onSubmit={handleSubmit}
          
          />
          <input
            className="input-font"
            type="text"
            name="deliveryAddressLine1"
            placeholder="Addresse Linje 1"
            required
          />
          <input
            className="input-font"
            type="text"
            name="deliveryAddressLine2"
            placeholder="Addresse Linje 2"

          />
          <input
            className="input-font"
            type="text"
            name="Name"
            placeholder="Navn"
            required
          />
          <input
            className="input-font"
            type="text"
            name="deliveryPhone"
            placeholder="Telefon"
            maxLength={8}
            required
          />
          <input
            className="input-font"
            type="email"
            name="deliveryEmail"
            placeholder="Email"
            pattern="^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
            required
          />
          <input
            className="input-font"
            type="text"
            name="deliveryCompanyName"
            placeholder="Firmanavn"
          />
          <input
            className="input-font"
            type="text"
            name="deliveryCompanyVAT"
            placeholder="VAT-nummer"
            maxLength={8}
            pattern="\d"
          />
          <br></br>
          <h1>Betalingsadresse</h1>
          <div className="check">
            <label htmlFor="checkbox">Samme som leveringsadresse</label>
            <input
              type="checkbox"
              checked={sameAsDeliveryAdress}
              name="checkbox"
              onChange={() => setCheck(!sameAsDeliveryAdress)}
            />
          </div>

          {!sameAsDeliveryAdress ? (
            <>
              <select
                className="input-font"
                id="deliveryCountry"
                name="deliveryCountry"
                placeholder="Land"
              >
                <option value="Denmark" selected>
                  Danmark
                </option>
              </select>

              <input
                className="input-font"
                type="text"
                name="billingZipCode"
                placeholder="Postnr"
                pattern="^(?:[1-24-9]\d{3}|3[0-8]\d{2})$"
                maxLength={4}
                onChange={checkZipCode}
                required
              />
              <input
                className="input-font read-only"
                type="text"
                name="billingCity"
                placeholder="By"
                value={city}
                readOnly
                required
              />
              <input
                className="input-font"
                type="text"
                name="billingAddressLine1"
                placeholder="Addresse Linje 1"
                required
              />
              <input
                className="input-font"
                type="text"
                name="billingAddressLine2"
                placeholder="Addresse Linje 2"
              />
              <input
                className="input-font"
                type="text"
                name="Name"
                placeholder="Navn"
                required
              />
              <input
                className="input-font"
                type="text"
                name="billingPhone"
                placeholder="Telefon"
                maxLength={8}
                pattern="\d"
                required
              />
              <input
                className="input-font"
                type="email"
                name="billingEmail"
                placeholder="Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />
              <input
                className="input-font"
                type="text"
                name="billingCompanyName"
                placeholder="Firmanavn"
              />
              <input
                className="input-font"
                type="text"
                name="billingCompanyVAT"
                placeholder="VAT-nummer"
                maxLength={8}
                pattern="\d"
              />
            </>
          ) : (
            <div> </div>
          )}
          <input type="submit" className="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
