import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import dog from '../images/dog.jpg';

const Navbar = () => {
  //links :
  //Random Beer
  return (
    <div className="navDiv">
      <a className="anchorDog" href="https://www.brewdog.com/usa/">
        <img className="brewdog" src={dog} />
      </a>
      <Nav defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link className="link" href="/">
            PAWYOUADRINK
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="link" href="/random" eventKey="link-1">
            Random Beer
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
    // <div className="navDiv">
    //   <ul className="navList">
    //     <img className="brewdog" src={dog} />
    //     <Link to="/">
    //       <li>PAWUADRINK</li>
    //     </Link>
    //     <Link to="/random">
    //       <li>Random Beer</li>
    //     </Link>
    //   </ul>
    // </div>
  );
};

export default Navbar;
