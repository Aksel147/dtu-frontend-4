import './Form.css';
import { useState } from 'react';

export default function Form() {
    const [check, setCheck] = useState(false);
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
    })

    const onChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setState((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className='formBody'>
            <div className='form'>
                <form>
                    <h1>Leveringsadresse</h1>
                    <input className='input-font' type='text' name='deliveryCountry' placeholder='Land' autoComplete='{false}' onChange={onChange} />
                    <input className='input-font' type='text' name='deliveryZipCode' placeholder='Postnr' autoComplete='{false}' onChange={onChange} />
                    <input className='input-font' type='text' name='deliveryCity' placeholder='By' autoComplete='{false}' onChange={onChange} />
                    <input className='input-font' type='text' name='deliveryAddressLine1' placeholder='Addresse Linje 1' autoComplete='{false}' onChange={onChange} />
                    <input className='input-font' type='text' name='deliveryAddressLine2' placeholder='Addresse Linje 2' autoComplete='{false}' onChange={onChange} />
                    <input className='input-font' type='text' name='deliveryName' placeholder='Navn' autoComplete='{false}' onChange={onChange} />
                    <input className='input-font' type='text' name='deliveryPhone' placeholder='Telefon' autoComplete='{false}' onChange={onChange} />
                    <input className='input-font' type='text' name='deliveryEmail' placeholder='Email' autoComplete='{false}' onChange={onChange} />
                    <input className='input-font' type='text' name='deliveryCompanyName' placeholder='Firmanavn' autoComplete='{false}' onChange={onChange} />
                    <input className='input-font' type='text' name='deliveryCompanyVAT' placeholder='VAT-nummer' autoComplete='{false}' onChange={onChange} />

                    <br></br>
                    <h1>Betalingsadresse</h1>
                    <div className='check'>
                        <label htmlFor='checkbox'>Samme som leveringsadresse</label>
                        <input type="checkbox" value='false' name='checkbox' onChange={()=>setCheck(!check)} />
                    </div>
                    <input className='input-font' type='text' name='billingCountry' placeholder='Land' autoComplete='{false}' defaultValue={check ? state.deliveryCountry:""} onChange={onChange}/>
                    <input className='input-font' type='text' name='billingZipCode' placeholder='Postnr' autoComplete='{false}' defaultValue={check ? state.deliveryZipCode:""} onChange={onChange}/>
                    <input className='input-font' type='text' name='billingCity' placeholder='By' autoComplete='{false}' defaultValue={check ? state.deliveryCity:""} onChange={onChange}/>
                    <input className='input-font' type='text' name='billingAddressLine1' placeholder='Addresse Linje 1' autoComplete='{false}' defaultValue={check ? state.deliveryAddressLine1:""} onChange={onChange}/>
                    <input className='input-font' type='text' name='billingAddressLine2' placeholder='Addresse Linje 2' autoComplete='{false}' defaultValue={check ? state.deliveryAddressLine2:""} onChange={onChange}/>
                    <input className='input-font' type='text' name='billingName' placeholder='Navn' autoComplete='{false}' defaultValue={check ? state.deliveryName:""} onChange={onChange}/>
                    <input className='input-font' type='text' name='billingPhone' placeholder='Telefon' autoComplete='{false}' defaultValue={check ? state.deliveryPhone:""} onChange={onChange}/>
                    <input className='input-font' type='text' name='billingEmail' placeholder='Email' autoComplete='{false}' defaultValue={check ? state.deliveryEmail:""} onChange={onChange}/>
                    <input className='input-font' type='text' name='billingCompanyName' placeholder='Firmanavn' autoComplete='{false}' defaultValue={check ? state.deliveryCompanyName:""} onChange={onChange}/>
                    <input className='input-font' type='text' name='billingCompanyVAT' placeholder='VAT-nummer' autoComplete='{false}' defaultValue={check ? state.deliveryCompanyVAT:""} onChange={onChange} />
                    <input type="button" className='submit' value='Submit' />
                </form>
            </div>
        </div>
    );
}
