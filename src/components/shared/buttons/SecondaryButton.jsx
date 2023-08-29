import React from 'react';

function SecondaryButton({ children, className = '' }) {
  return <button className={`btn secondary ${className}`}>{children}</button>;
}

export default SecondaryButton;
