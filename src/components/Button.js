import React from 'react';

function Button({label, children, onClick}) {
  return (
    <button onClick={onClick} className="btn btn-info mr-2" aria-label={label}>{children}</button>
  );
}

export default Button;