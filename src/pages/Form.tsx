import "./Form.css";
import { FormEvent, useState } from "react";
import zipCodes from '../assets/postnumre.json';

export default function Form() {
  const [sameAsDeliveryAdress, setCheck] = useState(true);

  const [deliveryCountry,setDeliveryCountry] = useState('');
  const [deliveryZipCode,setDeliveryZipCode] = useState('');
  const [deliveryCity,setDeliveryCity] = useState('');
  const [deliveryAddressLine1,setDeliveryAddressLine1] = useState('');
  const [deliveryAddressLine2,setDeliveryAddressLine2] = useState('');
  const [deliveryName,setDeliveryName] = useState('');
  const [deliveryPhone,setDeliveryPhone] = useState('');
  const [deliveryEmail,setDeliveryEmail] = useState('');
  const [deliveryCompanyName,setDeliveryCompanyName] = useState('');
  const [deliveryVAT,setDeliveryVAT] = useState('');

  const [billingCountry,setBillingCountry] = useState('');
  const [billingZipCode,setBillingZipCode] = useState('');
  const [billingCity,setBillingCity] = useState('');
  const [billingAddressLine1,setBillingAddressLine1] = useState('');
  const [billingAddressLine2,setBillingAddressLine2] = useState('');
  const [billingName,setBillingName] = useState('');
  const [billingPhone,setBillingPhone] = useState('');
  const [billingEmail,setBillingEmail] = useState('');
  const [billingCompanyName,setBillingCompanyName] = useState('');
  const [billingVAT,setBillingVAT] = useState('');
  
  const [isZipCodeValid,setIsZipCodeValid] = useState(true);
  const [isDigitsValid,setIsDigitsValid] = useState(true);

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
    deliveryVAT: "",
    billingCountry: "",
    billingZipCode: "",
    billingCity: "",
    billingAddressLine1: "",
    billingAddressLine2: "",
    billingName: "",
    billingPhone: "",
    billingEmail: "",
    billingCompanyName: "",
    billingVAT: "",
  },);
  */ 

  /*
  const onChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  */

  var form = document.querySelector('form')

  const validateDeliveryZipCode = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    
    const zipCode = zipCodes.find((zipCode) => zipCode.nr === value);
    if(zipCode !== undefined) {
      setDeliveryZipCode(zipCode.nr);
      setDeliveryCity(zipCode.navn);
      setIsZipCodeValid(true);
      console.log(isZipCodeValid);
    } else {
      setDeliveryZipCode('');
      setDeliveryCity('');
      setIsZipCodeValid(false);
      console.log(isZipCodeValid);
    }
  };

  const validateBillingZipCode = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    
    const zipCode = zipCodes.find((zipCode) => zipCode.nr === value);
    if(zipCode !== undefined){
      setBillingZipCode(zipCode.nr);
      setBillingCity(zipCode.navn);
      setIsZipCodeValid(true);
      console.log(isZipCodeValid);
    } else {
      setBillingZipCode('');
      setBillingCity('');
      setIsZipCodeValid(false);
      console.log(isZipCodeValid);
    }
  };

  const validateDigits = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    const regex = /^[0-9\b]+$/;
    if ((value === '' || regex.test(value))) {
        if (name === "deliveryPhone") {
            setDeliveryPhone(value);
        }
        if (name === "billingPhone") {
            setBillingPhone(value);
        }
        if (name === "deliveryCompanyVAT") {
            setDeliveryVAT(value);
        }
        if (name === "billingCompanyVAT") {
            setBillingVAT(value);
        }
    }
    if(value.length < 8) {
        setIsDigitsValid(false);
    }
    if(value.length === 8) {
        setIsDigitsValid(true);
        console.log(isDigitsValid);
    }
  }

  function handleSubmit(event: any) {
    const target = event.target;
    const name = target.name;
    let error = '';

    if (sameAsDeliveryAdress) {
      setBillingCountry(deliveryCountry);
      setBillingZipCode(deliveryZipCode);
      setBillingCity(deliveryCity);
      setBillingAddressLine1(deliveryAddressLine1);
      setBillingAddressLine2(deliveryAddressLine2);
      setBillingName(deliveryName);
      setBillingPhone(deliveryPhone);
      setBillingEmail(deliveryEmail);
      setBillingCompanyName(deliveryCompanyName);
      setBillingVAT(deliveryVAT);
    }

    if(deliveryCity===''){
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

  //console.log(billingCountry);

  

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
            className={isZipCodeValid ? 'input-font' : 'error-control'}
            type="text"
            name="deliveryZipCode"
            placeholder="Postnr"
            maxLength={4}
            onChange={validateDeliveryZipCode}
            required
          />

          <input
            className="input-font read-only"
            type="text"
            name="deliveryCity"
            placeholder="By"
            value={deliveryCity}
            required
            readOnly
            onSubmit={handleSubmit}
          
          />
          <input
            className="input-font"
            type="text"
            name="deliveryAddressLine1"
            placeholder="Addresse Linje 1"
            value={deliveryAddressLine1 || ''}
            onChange={(e) => setDeliveryAddressLine1(e.target.value)}
            required
          />
          <input
            className="input-font"
            type="text"
            name="deliveryAddressLine2"
            placeholder="Addresse Linje 2"
            value={deliveryAddressLine2 || ''}
            onChange={(e) => setDeliveryAddressLine2(e.target.value)}
          />
          <input
            className="input-font"
            type="text"
            name="Name"
            placeholder="Navn"
            value={deliveryName || ''}
            onChange={(e) => setDeliveryName(e.target.value)}
            required
          />
          <input
            className={isDigitsValid ? 'input-font' : 'error-control'}
            type="text"
            name="deliveryPhone"
            placeholder="Telefon"
            pattern="[0-9]+"
            maxLength={8}
            onChange={validateDigits}
            value={deliveryPhone || ''}
            required
          />
          <input
            className="input-font"
            type="email"
            name="deliveryEmail"
            placeholder="Email"
            value={deliveryEmail || ''}
            onChange={(e) => setDeliveryEmail(e.target.value)}
            required
          />
          <input
            className="input-font"
            type="text"
            name="deliveryCompanyName"
            placeholder="Firmanavn"
            value={deliveryCompanyName || ''}
            onChange={(e) => setDeliveryCompanyName(e.target.value)}
          />
          <input
            className={isDigitsValid ? 'input-font' : 'error-control'}
            type="text"
            name="deliveryCompanyVAT"
            placeholder="VAT-nummer"
            maxLength={8}
            onChange={validateDigits}
            value={deliveryVAT || ''}
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
                id="billingCountry"
                name="billingCountry"
                placeholder="Land"
              >
                <option value="Denmark" selected>
                  Danmark
                </option>
              </select>

              <input
                className={isZipCodeValid ? 'input-font' : 'error-control'}
                type="text"
                name="billingZipCode"
                placeholder="Postnr"
                pattern="^(?:[1-24-9]\d{3}|3[0-8]\d{2})$"
                maxLength={4}
                onChange={validateBillingZipCode}
                required
              />
              <input
                className="input-font read-only"
                type="text"
                name="billingCity"
                placeholder="By"
                value={billingCity}
                readOnly
                required
              />
              <input
                className="input-font"
                type="text"
                name="billingAddressLine1"
                placeholder="Addresse Linje 1"
                value={billingAddressLine1 || ''}
                onChange={(e) => setBillingAddressLine1(e.target.value)}
                required
              />
              <input
                className="input-font"
                type="text"
                name="billingAddressLine2"
                placeholder="Addresse Linje 2"
                value={billingAddressLine2 || ''}
                onChange={(e) => setBillingAddressLine2(e.target.value)}
              />
              <input
                className="input-font"
                type="text"
                name="Name"
                placeholder="Navn"
                value={billingName || ''}
                onChange={(e) => setBillingName(e.target.value)}
                required
              />
              <input
                className={isDigitsValid ? 'input-font' : 'error-control'}
                type="text"
                name="billingPhone"
                placeholder="Telefon"
                maxLength={8}
                onChange={validateDigits}
                value={billingPhone || ''}
                required
              />
              <input
                className="input-font"
                type="email"
                name="billingEmail"
                placeholder="Email"
                value={billingEmail || ''}
                onChange={(e) => setBillingEmail(e.target.value)}
                required
              />
              <input
                className="input-font"
                type="text"
                name="billingCompanyName"
                placeholder="Firmanavn"
                value={billingCompanyName || ''}
                onChange={(e) => setBillingCompanyName(e.target.value)}
              />
              <input
                className={isDigitsValid ? 'input-font' : 'error-control'}
                type="text"
                name="billingCompanyVAT"
                placeholder="VAT-nummer"
                maxLength={8}
                onChange={validateDigits}
                value={billingVAT || ''}
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
