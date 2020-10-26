import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  //links :
  //Random Beer
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/random">Random Beer</Link>
    </div>
  );
};

export default Navbar;
