import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, name, ...inputProps }) => (
    <div className="input-wrapper">
        <input className="form-input" onChange={handleChange} name={name} id={name} {...inputProps} />

        {label ?
            (<label
                htmlFor={name}
               className = {`${inputProps.value.length ? 'shrink':''}`}
            >{label}</label>)
            : null
        }




    </div>
)

export default FormInput;