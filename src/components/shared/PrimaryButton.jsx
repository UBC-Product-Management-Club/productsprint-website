import React from 'react';
import './button.css';

function PrimaryButton({ children }) {
  return (
    <div className='btn_container'>
      <button className='btn primary'>{children}</button>
    </div>
  );
}

export default PrimaryButton;
