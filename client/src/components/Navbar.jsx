import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  //links :
  //Random Beer
  return (
    <div>
      <Link>Home</Link>
      <Link to="/beers/random">Random Beer</Link>
    </div>
  );
};

export default Navbar;
