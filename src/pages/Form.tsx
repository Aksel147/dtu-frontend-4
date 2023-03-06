import "./Form.css";
import { useState } from "react";
import zipCodes from '../assets/postnumre.json';

export default function Form() {
  const [sameAsDeliveryAdress, setCheck] = useState(true);
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

   

  return (
    <div className="formBody">
      <div className="form">
        <form>

          <h1>Leveringsadresse</h1>
          <select
            className="input-font"
            id="deliveryCountry"
            name="deliveryCountry"
            placeholder="Land"
            autoComplete="{false}"
            onChange={onChange}
          >
            <option value="Denmark" selected>
              Danmark
            </option>
          </select>
          <input
            className="input-font"
            type="text"
            name="deliveryZipCode"
            placeholder="Postnr"
            autoComplete="{false}"
            required
            onChange={onChange}
          />
          <input
            className="input-font"
            type="text"
            name="deliveryCity"
            placeholder="By"
            autoComplete="{false}"
            required
            onChange={onChange}
          />
          <input
            className="input-font"
            type="text"
            name="deliveryAddressLine1"
            placeholder="Addresse Linje 1"
            autoComplete="{false}"
            required
            onChange={onChange}
          />
          <input
            className="input-font"
            type="text"
            name="deliveryAddressLine2"
            placeholder="Addresse Linje 2"
            autoComplete="{false}"
            onChange={onChange}
          />
          <input
            className="input-font"
            type="text"
            name="deliveryName"
            placeholder="Navn"
            autoComplete="{false}"
            required
            onChange={onChange}
          />
          <input
            className="input-font"
            type="text"
            name="deliveryPhone"
            placeholder="Telefon"
            autoComplete="{false}"
            required
            onChange={onChange}
          />
          <input
            className="input-font"
            type="email"
            name="deliveryEmail"
            placeholder="Email"
            autoComplete="{false}"
            required
            onChange={onChange}
          />
          <input
            className="input-font"
            type="text"
            name="deliveryCompanyName"
            placeholder="Firmanavn"
            autoComplete="{false}"
            onChange={onChange}
          />
          <input
            className="input-font"
            type="text"
            name="deliveryCompanyVAT"
            placeholder="VAT-nummer"
            autoComplete="{false}"
            onChange={onChange}
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
                autoComplete="{false}"
                defaultValue={sameAsDeliveryAdress ? state.deliveryCountry : ""}
                onChange={onChange}
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
                autoComplete="{false}"
                defaultValue={sameAsDeliveryAdress ? state.deliveryZipCode : ""}
                required
                onChange={onChange}
              />
              <input
                className="input-font"
                type="text"
                name="billingCity"
                placeholder="By"
                autoComplete="{false}"
                defaultValue={sameAsDeliveryAdress ? state.deliveryCity : ""}
                required
                onChange={onChange}
              />
              <input
                className="input-font"
                type="text"
                name="billingAddressLine1"
                placeholder="Addresse Linje 1"
                autoComplete="{false}"
                defaultValue={
                  sameAsDeliveryAdress ? state.deliveryAddressLine1 : ""
                }
                required
                onChange={onChange}
              />
              <input
                className="input-font"
                type="text"
                name="billingAddressLine2"
                placeholder="Addresse Linje 2"
                autoComplete="{false}"
                defaultValue={
                  sameAsDeliveryAdress ? state.deliveryAddressLine2 : ""
                }
                onChange={onChange}
              />
              <input
                className="input-font"
                type="text"
                name="billingName"
                placeholder="Navn"
                autoComplete="{false}"
                defaultValue={sameAsDeliveryAdress ? state.deliveryName : ""}
                required
                onChange={onChange}
              />
              <input
                className="input-font"
                type="text"
                name="billingPhone"
                placeholder="Telefon"
                autoComplete="{false}"
                defaultValue={sameAsDeliveryAdress ? state.deliveryPhone : ""}
                required
                onChange={onChange}
              />
              <input
                className="input-font"
                type="email"
                name="billingEmail"
                placeholder="Email"
                autoComplete="{false}"
                defaultValue={sameAsDeliveryAdress ? state.deliveryEmail : ""}
                required
                onChange={onChange}
              />
              <input
                className="input-font"
                type="text"
                name="billingCompanyName"
                placeholder="Firmanavn"
                autoComplete="{false}"
                defaultValue={
                  sameAsDeliveryAdress ? state.deliveryCompanyName : ""
                }
                onChange={onChange}
              />
              <input
                className="input-font"
                type="text"
                name="billingCompanyVAT"
                placeholder="VAT-nummer"
                autoComplete="{false}"
                defaultValue={
                  sameAsDeliveryAdress ? state.deliveryCompanyVAT : ""
                }
                onChange={onChange}
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
