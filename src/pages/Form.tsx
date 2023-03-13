import "./Form.css";
import { FormEvent, useState } from "react";
import zipCodes from "../assets/postnumre.json";

function FormItem() {
  // Address
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  // Contact
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  // Company
  const [companyName, setCompanyName] = useState("");
  const [companyVAT, setCompanyVAT] = useState("");

  // Validation
  const [isZipCodeValid, setIsZipCodeValid] = useState(true);
  const [isDigitsValidPhone, setIsDigitsValidPhone] = useState(true);
  const [isDigitsValidVAT, setIsDigitsValidVAT] = useState(true);
  const [isDigitsValidBillingVAT, setIsDigitsValidBillingVAT] = useState(true);

  // Error messages
  const [errorMessageZipCode, setErrorMessageZipCode] = useState("");
  const [errorMessagePhone, setErrorMessagePhone] = useState("");
  const [errorMessageVAT, setErrorMessageVAT] = useState("");
  const [errorMessageAddress, setErrorMessageAddress] = useState("");
  const [errorMessageFirstName, setErrorMessageFirstName] = useState("");
  const [errorMessageLastName, setErrorMessageLastName] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");

  // Validation

  function validateFirstName(firstName: string) {
    if (firstName.length < 1) {
      setErrorMessageFirstName("Indtast fornavn");
      return false;
    } else {
      setErrorMessageFirstName("");
      return true;
    }
  }

  function validateLastName(lastName: string) {
    if (lastName.length < 1) {
      setErrorMessageLastName("Indtast efternavn");
      return false;
    } else {
      setErrorMessageLastName("");
      return true;
    }
  }

  function validateAddress(address: string) {
    if (address.length < 1) {
      setErrorMessageAddress("Indtast adresse");
      return false;
    } else {
      setErrorMessageAddress("");
      return true;
    }
  }

  function validateZipCode(zipCode: string) {
    if (zipCode.length < 4) {
      setErrorMessageZipCode("Indtast gyldigt postnummer");
      return false;
    } else if (!isZipCodeValid) {
      setErrorMessageZipCode("Indtast gyldigt postnummer");
      return false;
    } else {
      setErrorMessageZipCode("");
      return true;
    }
  }

  function checkZipCode(zipCode: string) {
    const zipCodeInfo = zipCodes.find(
      (zipCodeInfo) => zipCodeInfo.nr === zipCode
    );
    if (zipCodeInfo !== undefined) {
      setZipCode(zipCodeInfo.nr);
      setCity(zipCodeInfo.navn);
      setIsZipCodeValid(true);
    } else {
      setZipCode("");
      setCity("");
      setIsZipCodeValid(false);
    }
  }

  function validateEmail(email: string) {
    const regex = /^\S+@\S+\.\S+$/;

    if (!regex.test(email)) {
      setErrorMessageEmail("Indtast gyldig email");
      return false;
    } else {
      setErrorMessageEmail("");
      return true;
    }
  }

  function checkPhone(phone: string) {
    const regex = /^[0-9\b]+$/;
    if (phone === "" || regex.test(phone)) {
      setPhone(phone);
    }
  }

  function validatePhone(phone: string) {
    if (phone.length < 8) {
      setErrorMessagePhone("Indtast gyldigt telefonnummer");
      return false;
    } else {
      setErrorMessagePhone("");
      return true;
    }
  }

  function checkCompanyVAT(companyVAT: string) {
    const regex = /^[0-9\b]+$/;
    if (companyVAT === "" || regex.test(companyVAT)) {
      setCompanyVAT(companyVAT);
    }
  }

  function validateCompanyVAT(companyVAT: string) {
    if (companyVAT.length < 8) {
      setErrorMessageVAT("Indtast gyldigt VAT-nummer");
      return false;
    } else {
      setErrorMessageVAT("");
      return true;
    }
  }

  return (
    <div className="form">
      <label>
        Land
        <select
          className="input-font"
          id="Country"
          name="Country"
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
              name="First Name"
              placeholder="Indtast fornavn"
              value={firstName || ""}
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={(e) => validateFirstName(e.target.value)}
              autoFocus
            />
          </label>
          <div
            className={`error-message ${
              errorMessageFirstName ? "show" : "hide"
            }`}
          >
            {errorMessageFirstName}
          </div>
        </div>

        <div>
          <label>
            Efternavn<span title="Påkrævet felt">*</span>
            <input
              className="input-font"
              type="text"
              name="Last Name"
              placeholder="Indtast efternavn"
              value={lastName || ""}
              onChange={(e) => setLastName(e.target.value)}
              onBlur={(e) => validateLastName(e.target.value)}
            />
          </label>
          <div
            className={`error-message ${
              errorMessageLastName ? "show" : "hide"
            }`}
          >
            {errorMessageLastName}
          </div>
        </div>
      </div>

      <label>
        Adresselinje 1<span title="Påkrævet felt">*</span>
        <input
          className="input-font"
          type="text"
          name="AddressLine1"
          placeholder="Adresselinje 1"
          value={addressLine1 || ""}
          onChange={(e) => setAddressLine1(e.target.value)}
          onBlur={(e) => validateAddress(e.target.value)}
        />
      </label>
      <div className={`error-message ${errorMessageAddress ? "show" : "hide"}`}>
        {errorMessageAddress}
      </div>

      <label>
        Adresselinje 2
        <input
          className="input-font"
          type="text"
          name="AddressLine2"
          placeholder="Adresselinje 2"
          value={addressLine2 || ""}
          onChange={(e) => setAddressLine2(e.target.value)}
        />
      </label>

      <div className="form-row">
        <div>
          <label>
            Postnummer<span title="Påkrævet felt">*</span>
            <input
              className={isZipCodeValid ? "input-font" : "error-control"}
              type="text"
              id="ZipCode"
              name="ZipCode"
              placeholder="Indtast postnummer"
              maxLength={4}
              onChange={(e) => checkZipCode(e.target.value)}
              onBlur={(e) => validateZipCode(e.target.value)}
            />
          </label>
          <div
            className={`error-message ${errorMessageZipCode ? "show" : "hide"}`}
          >
            {errorMessageZipCode}
          </div>
        </div>

        <label>
          By
          <input
            className="input-font read-only"
            type="text"
            name="City"
            placeholder="Hentes fra postnummer"
            value={city}
            readOnly
          />
        </label>
      </div>

      <label>
        Telefon<span title="Påkrævet felt">*</span>
        <input
          className={isDigitsValidPhone ? "input-font" : "error-control"}
          type="text"
          name="Phone"
          placeholder="Indtast telefon nummer"
          maxLength={8}
          onChange={(e) => checkPhone(e.target.value)}
          onBlur={(e) => validatePhone(e.target.value)}
          value={phone || ""}
        />
      </label>
      <div className={`error-message ${errorMessagePhone ? "show" : "hide"}`}>
        {errorMessagePhone}
      </div>

      <label>
        Email<span title="Påkrævet felt">*</span>
        <input
          className="input-font"
          type="text"
          name="Email"
          placeholder="Indtast email"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => validateEmail(e.target.value)}
        />
      </label>
      <div className={`error-message ${errorMessageEmail ? "show" : "hide"}`}>
        {errorMessageEmail}
      </div>

      <label>
        Firmanavn
        <input
          className="input-font"
          type="text"
          name="CompanyName"
          placeholder="Indtast firmanavn"
          value={companyName || ""}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </label>
      <label>
        VAT-nummer
        <input
          className={isDigitsValidVAT ? "input-font" : "error-control"}
          type="text"
          name="CompanyVAT"
          placeholder="Indtast VAT-nummer"
          maxLength={8}
          onChange={(e) => checkCompanyVAT(e.target.value)}
          value={companyVAT || ""}
          onBlur={(e) => validateCompanyVAT(e.target.value)}
        />
      </label>
      <div className={`error-message ${errorMessageVAT ? "show" : "hide"}`}>
        {errorMessageVAT}
      </div>
    </div>
  );
}

export default function Form() {
  const [sameAsDeliveryAdress, setCheck] = useState(true);

  var form = document.querySelector("form");

  var deliveryForm = document.createElement("FormItem");

  // On submit press
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // if (sameAsDeliveryAdress) {
    //   setBillingCountry(deliveryCountry);
    //   setBillingZipCode(deliveryZipCode);
    //   setBillingCity(deliveryCity);
    //   setBillingAddressLine1(deliveryAddressLine1);
    //   setBillingAddressLine2(deliveryAddressLine2);
    //   setBillingName(deliveryFirstName);
    //   setBillingPhone(deliveryPhone);
    //   setBillingEmail(deliveryEmail);
    //   setBillingCompanyName(deliveryCompanyName);
    //   setBillingVAT(deliveryVAT);
    // }
    // if (deliveryPhone.length < 8) {
    //   setErrorMessageDeliveryPhone("Indtast 8 cifre");
    //   event.preventDefault();
    // } else {
    //   setErrorMessageDeliveryPhone("");
    // }
    // if (billingPhone.length < 8) {
    //   setErrorMessageBillingPhone("Indtast 8 cifre");
    //   event.preventDefault();
    // } else {
    //   setErrorMessageBillingPhone("");
    // }
    // if (deliveryZipCode.length < 4) {
    //   setErrorMessageDeliveryZipCode("Indtast et gyldigt postnummer");
    //   event.preventDefault();
    // } else {
    //   setErrorMessageDeliveryZipCode("");
    // }
    // if (billingZipCode.length < 4) {
    //   setErrorMessageBillingZipCode("Indtast et gyldigt postnummer");
    //   event.preventDefault();
    // } else {
    //   setErrorMessageBillingZipCode("");
    // }
    // if (billingVAT !== "" && billingVAT.length < 8) {
    //   setErrorMessageBillingVAT("Indtast 8 cifre");
    //   event.preventDefault();
    // } else {
    //   setErrorMessageBillingVAT("");
    // }
    // if (deliveryVAT !== "" && deliveryVAT.length < 8) {
    //   setErrorMessageDeliveryVAT("Indtast 8 cifre");
    //   event.preventDefault();
    // } else {
    //   setErrorMessageDeliveryVAT("");
    // }
    // if (validateDeliveryAddress(deliveryAddressLine1) === false) {
    //   event.preventDefault();
    // }
    // if (validateDeliveryFirstName(deliveryFirstName) === false) {
    //   event.preventDefault();
    // }
    // if (validateDeliveryLastName(deliveryLastName) === false) {
    //   event.preventDefault();
    // }
    // if (validateDeliveryEmail(deliveryEmail) === false) {
    //   event.preventDefault();
    // }
    // if (billingAddressLine1 === "") {
    //   setErrorMessageBillingAddress("Indtast en adresse");
    //   event.preventDefault();
    // } else {
    //   setErrorMessageBillingAddress("");
    // }
    // if (billingName === "") {
    //   setErrorMessageBillingFirstName("Indtast et navn");
    //   event.preventDefault();
    // } else {
    //   setErrorMessageBillingFirstName("");
    // }
    // if (billingEmail === "") {
    //   setErrorMessageBillingEmail("Indtast en email");
    //   event.preventDefault();
    // } else {
    //   setErrorMessageBillingEmail("");
    // }
  }

  return (
    <div className="formBody">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h2>Leveringsadresse</h2>

          <FormItem></FormItem>
          <h3>Betalingsadresse</h3>
          <div className="check">
            <label className="no-margin" htmlFor="checkbox">
              Samme som leveringsadresse
            </label>
            <input
              type="checkbox"
              checked={sameAsDeliveryAdress}
              name="checkbox"
              onChange={() => setCheck(!sameAsDeliveryAdress)}
            />
          </div>
          {!sameAsDeliveryAdress ? <FormItem></FormItem> : <div> </div>}
          <input type="submit" className="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
