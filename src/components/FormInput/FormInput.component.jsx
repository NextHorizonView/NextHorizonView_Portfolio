import React from 'react'
import './FormInput.styles.css'

const FormInput = ({ name, state, setState, placeholder, type }) => {
    const onChangeHandler = (e) => {
        setState(e.target.value);
    }
    return (
        <div className='form-input-container'>
            <p className='form-name'>{name}</p>
            <input required className='form-input' value={state} onChange={onChangeHandler} placeholder={placeholder} type={type} />
        </div>
    )
}

export default FormInput