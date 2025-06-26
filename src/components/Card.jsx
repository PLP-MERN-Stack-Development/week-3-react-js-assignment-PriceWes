import React from 'react';

const Card = ({ children, className = '', ...rest }) => (
  <div className={`bg-white dark:bg-gray-800 shadow rounded p-4 mb-4 ${className}`} {...rest}>
    {children}
  </div>
);

export default Card;