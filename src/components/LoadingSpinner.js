import React from 'react';

const LoadingSpinner = ({ message }) => (
  <div className="loading" style={{ display: 'block' }}>
    <div className="spinner"></div>
    <p>{message || 'Loading...'}</p>
  </div>
);

export default LoadingSpinner;