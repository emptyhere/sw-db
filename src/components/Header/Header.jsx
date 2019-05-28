import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={`${styles.header} d-flex`}>
      <h3>
        <Link to='/'>
          SW-DB
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to='/people'>People</Link>
        </li>
        <li>
        <Link to='/planets'>Planets</Link>
        </li>
        <li>
          <Link to='/starships'>Starships</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;