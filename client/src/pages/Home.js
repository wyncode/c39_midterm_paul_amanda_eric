import React from 'react';
import Searchbar from '../components/Searchbar';
import { Container } from 'react-bootstrap';
import Results from './Results';

const Home = () => {
  // logo at the top
  //Big image
  //Search bar

  return (
    <Container>
      <h1>WELCOME TO BREWDOG</h1>
      <Searchbar />
      {/* <Results /> */}
    </Container>
  );
  //text about the app
};

export default Home;
