import React, { useEffect, useRef } from 'react';
import './InputWithLabel.css';

const InputWithLabel = ({ 
    givenValue,
    givenId,
    givenName,
    handleChange,
    children 
}) => {
    
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
        inputRef.current.value= "";
    }, [givenValue]);

 

    return (
        <div className='form__styling'>
            <label htmlFor={givenName} className="label__for__input">{children}</label>
            <input 
                ref={inputRef}
                id={givenId} 
                type="text" 
                name={givenName} 
                value={givenValue} 
                onChange={handleChange} 
                required={true}
                placeholder="type here..."
            /> 
        </div>
    )
}

export default InputWithLabel;
