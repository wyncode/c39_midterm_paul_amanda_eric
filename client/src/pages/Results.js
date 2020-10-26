// import React from 'react';
import React, { useState, useEffect } from 'react';

import { Row, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Searchbar from '../components/Searchbar';

const Results = () => {
  const [search, setSearch] = useState();
  const [apiData, setApiData] = useState([]);
  const [sort, setSort] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.elements.searchbar.value);
  };

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?beer_name=${search}`
      );
      const data = await response.json();

      setApiData(data);
    };

    try {
      fetchResults();
    } catch (error) {
      console.log(error);
    }
  }, [search, sort]);

  const handleSort = () => {
    const newArray = apiData.sort(function (a, b) {
      return a.abv - b.abv;
    });
    setSort(!sort);
    // setApiData(newArray);
  };

  console.log(apiData);
  return (
    <div>
      <Searchbar submit={handleSubmit} />

      <Container>
        <h1>Let us paw you a drink</h1>
        {/* <Searchbar /> */}
        <button onClick={handleSort}>Sort by ABV</button>
        <Row>
          {apiData &&
            apiData.map((beer) => (
              <div>
                <Card key={beer.id} style={{ width: 200, margin: 5 }}>
                  <a href={`/beers/${beer.id}`}>
                    <Card.Img
                      variant="top"
                      src={beer.image_url}
                      alt={beer.name}
                      width={200}
                    />
                  </a>

                  <Card.Body>
                    <Card.Title>{beer.name}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </Row>
      </Container>
    </div>
  );
};
export default Results;
