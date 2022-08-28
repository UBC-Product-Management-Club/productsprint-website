import React from 'react';

function SecondaryButton({ children }) {
  return (
    <div className='btn_container'>
      <button className='btn secondary'>{children}</button>
    </div>
  );
}

export default SecondaryButton;
