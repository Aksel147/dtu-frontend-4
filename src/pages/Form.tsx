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
  const [isDigitsValidPhone,setIsDigitsValidPhone] = useState(true);
  const [isDigitsValidDeliveryVAT,setIsDigitsValidDeliveryVAT] = useState(true);
  const [isDigitsValidBillingVAT,setIsDigitsValidBillingVAT] = useState(true);

  const [errorMessageZipCode, setErrorMessageZipCode] = useState('');
  const [errorMessagePhone, setErrorMessagePhone] = useState('');
  const [errorMessageBillingVAT, setErrorMessageBillingVAT] = useState('');
  const [errorMessageDeliveryVAT, setErrorMessageDeliveryVAT] = useState('');

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
    } else {
      setDeliveryZipCode('');
      setDeliveryCity('');
      setIsZipCodeValid(false);
    }
  };

  const validateBillingZipCode = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    
    const zipCode = zipCodes.find((zipCode) => zipCode.nr === value);
    if(zipCode !== undefined){
      setBillingZipCode(zipCode.nr);
      setBillingCity(zipCode.navn);
      setIsZipCodeValid(true);
    } else {
      setBillingZipCode('');
      setBillingCity('');
      setIsZipCodeValid(false);
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
    if(value.length < 8 && (name === "deliveryPhone" || name === "billingPhone")) {
        setIsDigitsValidPhone(false);
    }
    if(value.length === 8 && (name === "deliveryPhone" || name === "billingPhone")) {
        setIsDigitsValidPhone(true);
    }
    if(value.length < 8 && name === "deliveryCompanyVAT") {
        setIsDigitsValidDeliveryVAT(false);
    }
    if((value.length === 8 || value.length === 0) && name === "deliveryCompanyVAT") {
        setIsDigitsValidDeliveryVAT(true);
    }
    if(value.length < 8 && name === "billingCompanyVAT") {
        setIsDigitsValidBillingVAT(false);
    }
    if((value.length === 8 || value.length === 0) && name === "billingCompanyVAT") {
        setIsDigitsValidBillingVAT(true);
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

    if (deliveryPhone.length < 8) {
      event.preventDefault();
      setErrorMessagePhone('Indtast venligst 8 cifre');
      event.preventDefault();
    } else {
      setErrorMessagePhone('');
    }

    if (deliveryZipCode.length < 4) {
      setErrorMessageZipCode('Indtast venligst et gyldigt postnummer');
      event.preventDefault();
    } else {
      setErrorMessageZipCode('');
    }

    if (billingVAT !== '' && billingVAT.length < 8) {
      setErrorMessageBillingVAT('Indtast venligst 8 cifre');
      event.preventDefault();
    } else {
      setErrorMessageBillingVAT('');
    }

    if (deliveryVAT !== '' && deliveryVAT.length < 8) {
      setErrorMessageDeliveryVAT('Indtast venligst 8 cifre');
      event.preventDefault();
    } else {
      setErrorMessageDeliveryVAT('');
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
    // <div className={`error-message ${errorMessage ? 'show' : 'hide'}`}>{errorMessage}
    <div className="formBody">
      <div className="form">
        <form onSubmit={handleSubmit}>
        
          <h1>Leveringsadresse</h1>
          <label>
            Land
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
          </label>
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
          <label>
            Postnummer
            <input
              className={isZipCodeValid ? 'input-font' : 'error-control'}
              type="text"
              id="deliveryZipCode"
              name="deliveryZipCode"
              placeholder="Indtast postnummer"
              maxLength={4}
              onChange={validateDeliveryZipCode}
              required
            />
          </label>
            <div className={`error-message ${errorMessageZipCode ? 'show' : 'hide'}`}>{errorMessageZipCode}</div>
          <label>
            By
            <input
              className="input-font read-only"
              type="text"
              name="deliveryCity"
              placeholder="Hentes fra postnummer"
              value={deliveryCity}
              required
              readOnly
              onSubmit={handleSubmit}
            
            />
          </label>
          <label>
            Adresse Linje 1
          <input
            className="input-font"
            type="text"
            name="deliveryAddressLine1"
            placeholder="Adresse Linje 1"
            value={deliveryAddressLine1 || ''}
            onChange={(e) => setDeliveryAddressLine1(e.target.value)}
            required
          />
          </label>
          <label>
          Adresse Linje 2
            <input
              className="input-font"
              type="text"
              name="deliveryAddressLine2"
              placeholder="Addresse Linje 2"
              value={deliveryAddressLine2 || ''}
              onChange={(e) => setDeliveryAddressLine2(e.target.value)}
            />
          </label>
          <label>
            Navn
            <input
              className="input-font"
              type="text"
              name="Name"
              placeholder="Indtast navn"
              value={deliveryName || ''}
              onChange={(e) => setDeliveryName(e.target.value)}
              required
            />
          </label>
          <label>
            Telefon
            <input
              className={isDigitsValidPhone ? 'input-font' : 'error-control'}
              type="text"
              name="deliveryPhone"
              placeholder="Indtast telefon nummer"
              maxLength={8}
              onChange={validateDigits}
              value={deliveryPhone || ''}
              required
            />
          </label>
            <div className={`error-message ${errorMessagePhone ? 'show' : 'hide'}`}>{errorMessagePhone}</div>
          <label>
            Email
            <input
              className="input-font"
              type="email"
              name="deliveryEmail"
              placeholder="Indtast email"
              value={deliveryEmail || ''}
              onChange={(e) => setDeliveryEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Firmanavn
            <input
              className="input-font"
              type="text"
              name="deliveryCompanyName"
              placeholder="Indtast firmanavn"
              value={deliveryCompanyName || ''}
              onChange={(e) => setDeliveryCompanyName(e.target.value)}
            />
          </label>
          <label>
            VAT-nummer
            <input
              className={isDigitsValidDeliveryVAT ? 'input-font' : 'error-control'}
              type="text"
              name="deliveryCompanyVAT"
              placeholder="Indtast VAT-nummer"
              maxLength={8}
              onChange={validateDigits}
              value={deliveryVAT || ''}
            />
          </label>
          <div className={`error-message ${errorMessageDeliveryVAT ? 'show' : 'hide'}`}>{errorMessageDeliveryVAT}</div>
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
              <label>
                Land
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
              </label>
              <label>
                Postnummer 
                <input
                  className={isZipCodeValid ? 'input-font' : 'error-control'}
                  type="text"
                  name="billingZipCode"
                  placeholder="Indtast postnummer"
                  maxLength={4}
                  onChange={validateBillingZipCode}
                  required
                />
              </label>
              <label>
                By
                <input
                  className="input-font read-only"
                  type="text"
                  name="billingCity"
                  placeholder="Hentes fra postnummer"
                  value={billingCity}
                  readOnly
                  required
                />
              </label>
              <label>
                Adresse Linje 1
                <input
                  className="input-font"
                  type="text"
                  name="billingAddressLine1"
                  placeholder="Addresse Linje 1"
                  value={billingAddressLine1 || ''}
                  onChange={(e) => setBillingAddressLine1(e.target.value)}
                  required
                />
              </label>
              <label>
                Adresse Linje 2
                <input
                  className="input-font"
                  type="text"
                  name="billingAddressLine2"
                  placeholder="Addresse Linje 2"
                  value={billingAddressLine2 || ''}
                  onChange={(e) => setBillingAddressLine2(e.target.value)}
                />
              </label>
              <label>
                Navn
                <input
                  className="input-font"
                  type="text"
                  name="Name"
                  placeholder="Indtast navn"
                  value={billingName || ''}
                  onChange={(e) => setBillingName(e.target.value)}
                  required
                />
              </label>
              <label>
                Telefon
                <input
                  className={isDigitsValidPhone ? 'input-font' : 'error-control'}
                  type="text"
                  name="billingPhone"
                  placeholder="Indtast telefon nummer"
                  maxLength={8}
                  onChange={validateDigits}
                  value={billingPhone || ''}
                  required
                />
              </label>
              <label>
                Email
                <input
                  className="input-font"
                  type="email"
                  name="billingEmail"
                  placeholder="Indtast email"
                  value={billingEmail || ''}
                  onChange={(e) => setBillingEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                Firmanavn
                <input
                  className="input-font"
                  type="text"
                  name="billingCompanyName"
                  placeholder="Indtast firmanavn"
                  value={billingCompanyName || ''}
                  onChange={(e) => setBillingCompanyName(e.target.value)}
                />
              </label>
              <label>
                VAT-nummer
                <input
                  className={isDigitsValidBillingVAT ? 'input-font' : 'error-control'}
                  type="text"
                  name="billingCompanyVAT"
                  placeholder="Indtast VAT-nummer"
                  maxLength={8}
                  onChange={validateDigits}
                  value={billingVAT || ''}
                  />
                </label>
                <div className={`error-message ${errorMessageBillingVAT ? 'show' : 'hide'}`}>{errorMessageBillingVAT}</div>
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
