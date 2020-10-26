import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const Home = () => {
  const history = useHistory();
  const [input, setInput] = useState();
  const [search, setSearch] = useState();
  const handleSearch = (event) => {
    event.preventDefault();
    history.push('/Results');
    setSearch(event.target.value);
  };
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <Container>
      <h1>WELCOME TO BREWDOG</h1>

      <Form onSubmit={handleSearch}>
        <Form.Control
          id="searchbar"
          size="lg"
          type="text"
          placeholder="Search a Beer!"
          onChange={handleInputChange}
        />
      </Form>
    </Container>
  );
  //text about the app
};

export default Home;
