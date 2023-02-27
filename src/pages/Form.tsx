import './Form.css';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const navigate = useNavigate();

    function handleClick(event: any) {
      navigate('/');
    }
  
    return <button type="button" onClick={handleClick}>Go back</button>
}
