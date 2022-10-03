import React from 'react';
import './button.css';

function PrimaryButton({ children, className = '' }) {
  return <button className={`btn ${className}`}>{children}</button>;
}

export default PrimaryButton;
