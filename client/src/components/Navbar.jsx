import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { motion } from 'framer-motion';
import dog from '../images/dog.jpg';

const Navbar = () => {
  //links :
  //Random Beer
  return (
    <motion.div
      className="navDiv"
      // whileHover={{ scale: 1.0 }}
      // transition={{ duration: 2 }}
    >
      <a className="anchorDog" href="https://www.brewdog.com/usa/">
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 1 }}>
          <img className="brewdog" src={dog} alt="brew dog" />
        </motion.div>
      </a>

      <Nav defaultActiveKey="/home">
        <Nav.Item>
          <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 1 }}>
            <Nav.Link className="link" href="/">
              <h4>PAWYOUADRINK</h4>
            </Nav.Link>
          </motion.div>
        </Nav.Item>
        <Nav.Item>
          <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 1 }}>
            <Nav.Link className="link" href="/random" eventKey="link-1">
              <h4>Random Beer</h4>
            </Nav.Link>
          </motion.div>
        </Nav.Item>
      </Nav>
    </motion.div>
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
