import React from 'react';

import './ErrorIndicator.module.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">ERROR!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
      </span>
    </div>
  );
};

export default ErrorIndicator;
