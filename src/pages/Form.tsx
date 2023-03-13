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

  const [errorMessageDeliveryZipCode, setErrorMessageDeliveryZipCode] = useState('');
  const [errorMessageBillingZipCode, setErrorMessageBillingZipCode] = useState('');
  const [errorMessageDeliveryPhone, setErrorMessageDeliveryPhone] = useState('');
  const [errorMessageBillingPhone, setErrorMessageBillingPhone] = useState('');
  const [errorMessageBillingVAT, setErrorMessageBillingVAT] = useState('');
  const [errorMessageDeliveryVAT, setErrorMessageDeliveryVAT] = useState('');
  const [errorMessageDeliveryAddress, setErrorMessageDeliveryAddress] = useState('');
  const [errorMessageBillingAddress, setErrorMessageBillingAddress] = useState('');
  const [errorMessageDeliveryName, setErrorMessageDeliveryName] = useState('');
  const [errorMessageBillingName, setErrorMessageBillingName] = useState('');
  const [errorMessageDeliveryEmail, setErrorMessageDeliveryEmail] = useState('');
  const [errorMessageBillingEmail, setErrorMessageBillingEmail] = useState('');

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
    if((value.length === 8 || value.length === 0) && (name === "deliveryPhone" || name === "billingPhone")) {
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
      setErrorMessageDeliveryPhone('Indtast 8 cifre');
      event.preventDefault();
    } else {
      setErrorMessageDeliveryPhone('');
    }

    if (billingPhone.length < 8) {
      event.preventDefault();
      setErrorMessageBillingPhone('Indtast 8 cifre');
      event.preventDefault();
    } else {
      setErrorMessageBillingPhone('');
    }

    if (deliveryZipCode.length < 4) {
      setErrorMessageDeliveryZipCode('Indtast et gyldigt postnummer');
      event.preventDefault();
    } else {
      setErrorMessageDeliveryZipCode('');
    }

    if (billingZipCode.length < 4) {
      setErrorMessageBillingZipCode('Indtast et gyldigt postnummer');
      event.preventDefault();
    } else {
      setErrorMessageBillingZipCode('');
    }

    if (billingVAT !== '' && billingVAT.length < 8) {
      setErrorMessageBillingVAT('Indtast 8 cifre');
      event.preventDefault();
    } else {
      setErrorMessageBillingVAT('');
    }

    if (deliveryVAT !== '' && deliveryVAT.length < 8) {
      setErrorMessageDeliveryVAT('Indtast 8 cifre');
      event.preventDefault();
    } else {
      setErrorMessageDeliveryVAT('');
    }

    if (deliveryAddressLine1 === '') {
      setErrorMessageDeliveryAddress('Indtast en adresse');
      event.preventDefault();
    } else {
      setErrorMessageDeliveryAddress('');
    }

    if (deliveryName === '') {
      setErrorMessageDeliveryName('Indtast et navn');
      event.preventDefault();
    } else {
      setErrorMessageDeliveryName('');
    }

    if (deliveryEmail === '') {
      setErrorMessageDeliveryEmail('Indtast en email');
      event.preventDefault();
    } else {
      setErrorMessageDeliveryEmail('');
    }

    if (billingAddressLine1 === '') {
      setErrorMessageBillingAddress('Indtast en adresse');
      event.preventDefault();
    } else {
      setErrorMessageBillingAddress('');
    }

    if (billingName === '') {
      setErrorMessageBillingName('Indtast et navn');
      event.preventDefault();
    } else {
      setErrorMessageBillingName('');
    }

    if (billingEmail === '') {
      setErrorMessageBillingEmail('Indtast en email');
      event.preventDefault();
    } else {
      setErrorMessageBillingEmail('');
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

          <div className="form-row">

          <div>
          <label>
            Fornavn<span title="Påkrævet felt">*</span>
            <input
              className="input-font"
              type="text"
              name="Name"
              placeholder="Indtast navn"
              value={deliveryName || ''}
              onChange={(e) => setDeliveryName(e.target.value)}
            />
          </label>
            <div className={`error-message ${errorMessageDeliveryName ? 'show' : 'hide'}`}>{errorMessageDeliveryName}</div>

          </div>

          <div>
            <label>
            Efternavn<span title="Påkrævet felt">*</span>
            <input
              className="input-font"
              type="text"
              name="Name"
              placeholder="Indtast navn"
              value={deliveryName || ''}
              onChange={(e) => setDeliveryName(e.target.value)}
            />
          </label>
            <div className={`error-message ${errorMessageDeliveryName ? 'show' : 'hide'}`}>{errorMessageDeliveryName}</div>

          </div>

          </div>

          
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
            Adresselinje 1<span title="Påkrævet felt">*</span>
          <input
            className="input-font"
            type="text"
            name="deliveryAddressLine1"
            placeholder="Adresse Linje 1"
            value={deliveryAddressLine1 || ''}
            onChange={(e) => setDeliveryAddressLine1(e.target.value)}
          />
          </label>
          <div className={`error-message ${errorMessageDeliveryAddress ? 'show' : 'hide'}`}>{errorMessageDeliveryAddress}</div>

          <label>
          Adresselinje 2
            <input
              className="input-font"
              type="text"
              name="deliveryAddressLine2"
              placeholder="Addresse Linje 2"
              value={deliveryAddressLine2 || ''}
              onChange={(e) => setDeliveryAddressLine2(e.target.value)}
            />
          </label>

          <div className="form-row">
          <div>
            <label>
              Postnummer<span title="Påkrævet felt">*</span>
              <input
                className={isZipCodeValid ? 'input-font' : 'error-control'}
                type="text"
                id="deliveryZipCode"
                name="deliveryZipCode"
                placeholder="Indtast postnummer"
                maxLength={4}
                onChange={validateDeliveryZipCode}
              />
            </label>
            <div className={`error-message ${errorMessageDeliveryZipCode ? 'show' : 'hide'}`}>{errorMessageDeliveryZipCode}</div>
          </div>
          <label>
            By
            <input
              className="input-font read-only"
              type="text"
              name="deliveryCity"
              placeholder="Hentes fra postnummer"
              value={deliveryCity}
              readOnly
              onSubmit={handleSubmit}
            />
          </label>
          </div>

          
          
          
          
          <label>
            Telefon<span title="Påkrævet felt">*</span>
            <input
              className={isDigitsValidPhone ? 'input-font' : 'error-control'}
              type="text"
              name="deliveryPhone"
              placeholder="Indtast telefon nummer"
              maxLength={8}
              onChange={validateDigits}
              value={deliveryPhone || ''}
            />
          </label>
            <div className={`error-message ${errorMessageDeliveryPhone ? 'show' : 'hide'}`}>{errorMessageDeliveryPhone}</div>
          <label>
            Email<span title="Påkrævet felt">*</span>
            <input
              className="input-font"
              type="email"
              name="deliveryEmail"
              placeholder="Indtast email"
              value={deliveryEmail || ''}
              onChange={(e) => setDeliveryEmail(e.target.value)}
            />
          </label>
            <div className={`error-message ${errorMessageDeliveryEmail ? 'show' : 'hide'}`}>{errorMessageDeliveryEmail}</div>
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
                />
              </label>
                <div className={`error-message ${errorMessageBillingZipCode ? 'show' : 'hide'}`}>{errorMessageBillingZipCode}</div>
              <label>
                By
                <input
                  className="input-font read-only"
                  type="text"
                  name="billingCity"
                  placeholder="Hentes fra postnummer"
                  value={billingCity}
                  readOnly
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
                <div className={`error-message ${errorMessageBillingAddress ? 'show' : 'hide'}`}>{errorMessageBillingAddress}</div>
              <label>
                Navn
                <input
                  className="input-font"
                  type="text"
                  name="Name"
                  placeholder="Indtast navn"
                  value={billingName || ''}
                  onChange={(e) => setBillingName(e.target.value)}
                />
              </label>
               <div className={`error-message ${errorMessageBillingName ? 'show' : 'hide'}`}>{errorMessageBillingName}</div>
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
                />
              </label>
                <div className={`error-message ${errorMessageBillingPhone ? 'show' : 'hide'}`}>{errorMessageBillingPhone}</div>
              <label>
                Email
                <input
                  className="input-font"
                  type="email"
                  name="billingEmail"
                  placeholder="Indtast email"
                  value={billingEmail || ''}
                  onChange={(e) => setBillingEmail(e.target.value)}
                />
              </label>
                <div className={`error-message ${errorMessageBillingEmail ? 'show' : 'hide'}`}>{errorMessageBillingEmail}</div>
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
