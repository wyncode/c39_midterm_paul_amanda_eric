// import React, { useState, useEffect } from 'react';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Results from '../pages/Results';

const Searchbar = ({ submit }) => {
  // const [search, setSearch] = useState();
  // const [apiData, setApiData] = useState([]);
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setSearch(event.target.elements.searchbar.value);
  // };

  // useEffect(() => {
  //   const fetchResults = async () => {
  //     const response = await fetch(
  //       `https://api.punkapi.com/v2/beers?beer_name=${search}`
  //     );
  //     const data = await response.json();

  //     setApiData(data);
  //   };

  //   try {
  //     fetchResults();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [search]);
  // console.log(apiData);
  return (
    <div>
      <Form onSubmit={submit}>
        <Form.Control
          id="searchbar"
          size="lg"
          type="text"
          placeholder="Search a Beer!"
        />
      </Form>
      {/* <Results data={apiData} /> */}
    </div>
  );
};

export default Searchbar;
