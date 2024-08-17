import React from 'react';
import './Input.css';

function Input({ label, type, name, value, onChange }) {
  return (
    <div className="wrapper">
      <label className="label" htmlFor={name}>
        {label}{' '}
      </label>
      <input
        className="input"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
      <p className="error">Error</p>
    </div>
  );
}

export default Input;
