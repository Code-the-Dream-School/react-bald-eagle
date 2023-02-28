import React from 'react';
import style from './InputWithLabel.module.css';
import PropTypes from 'prop-types';

const InputWithLabel = ({ 
    givenValue,
    givenName,
    handleChange,
    refTitleBox,
    isThisrequired,
    forPlaceholder,
    children 
}) => {
    
    return (
        <>
            <label htmlFor={givenName} className={style.labels}>{children}</label>
            <input 
                ref={refTitleBox}
                id='todoTitle' 
                type='text'
                name={givenName} 
                value={givenValue} 
                onChange={handleChange} 
                required={isThisrequired}
                placeholder={forPlaceholder}
                className={style.inputs}
            /> 
        </>
    )
}

InputWithLabel.propTypes = {
    givenValue: PropTypes.string,
    givenName: PropTypes.string,
    handleChange: PropTypes.func,
    refTitleBox: PropTypes.object,
    isThisrequired: PropTypes.bool,
    forPlaceholder: PropTypes.string,
    children: PropTypes.string
  }

export default InputWithLabel;
