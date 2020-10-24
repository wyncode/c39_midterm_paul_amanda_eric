import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Results from '../pages/Results';

const Searchbar = () => {
  const [search, setSearch] = useState();
  const [apiData, setApiData] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.elements.searchbar.value);
  };

  useEffect(() => {
    const fetchResults = async () => {
      const beerNames = [];
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?beer_name=${search}`
      );
      const data = await response.json();
      data.map((beer) => {
        beerNames.push(beer.name);
        console.log(beerNames);
      });

      setApiData(beerNames);
    };
    // console.log(apiData);
    try {
      fetchResults();
    } catch (error) {
      console.log(error);
    }
  }, [search]);
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          id="searchbar"
          size="lg"
          type="text"
          placeholder="Search a Beer!"
        />
      </Form>
    </div>
  );
};

export default Searchbar;
