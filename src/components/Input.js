import React from 'react';

function Input({ amount, label, onChange }) {
  return (
    <input type="text" className="form-control text-center" aria-labelledby={label} value={amount} onChange={onChange} />
  );
}

export default Input;