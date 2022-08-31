import React from 'react';
import './button.css';

function PrimaryButton({ children, className = '' }) {
  return (
    <div className='btn_container'>
      <button className={`btn ${className}`}>{children}</button>
    </div>
  );
}

export default PrimaryButton;
