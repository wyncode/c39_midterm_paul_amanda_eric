import React from 'react';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Dogsnbeer from '../images/dogandbeer.jpg';

const Home = () => {
  const history = useHistory();
  const handleAge = (event) => {
    event.preventDefault();
    // if (Number(event.target.elements.age.value) >= 21) {
    //   history.push('/Random');
    // } else {
    //   alert('You must be 21 to enter!');
    // }
    const dob = new Date(event.target.elements.age.value);
    const now = new Date();
    if (now - dob >= 662810000000) {
      window.location = '/';
    } else {
      alert("You're too young!");
    }
  };
  return (
    <div className="homediv">
      <h1 className="home-title">CAN WE PAW YOU A BEER?</h1>

      <img class="dogs-and-beer" src={Dogsnbeer} alt="dogs-and-beer" />
      <Form onSubmit={handleAge}>
        <Form.Label>
          <h2 className>Are you old enough?</h2>
        </Form.Label>
        <Form.Control size="lg" type="text" id="age" placeholder="MM/DD/YYYY" />
      </Form>
    </div>
  );
};
export default Home;
