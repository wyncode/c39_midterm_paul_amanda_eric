import React, { useState, useEffect } from 'react';
import { Row, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import classNames from 'classnames';
import Searchbar from '../components/Searchbar';
import dog from '../images/dog.jpg';

const Results = () => {
  const [search, setSearch] = useState();
  const [apiData, setApiData] = useState([]);
  const [sortOptions, setSortOptions] = useState({
    sortKey: 'abv',
    sortDirection: 'asc'
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.elements.searchbar.value);
  };

  const handleSortClick = (sortKey, sortDirection) => {
    setSortOptions({ sortKey, sortDirection });
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
  }, [search]);

  console.log('what are my values', {
    stateObj: sortOptions,
    keyIWant: sortOptions.sortKey,
    directionIWant: sortOptions.sortDirection
  });

  const sortedBreweries = apiData.sort(function (a, b) {
    const aValue = a[sortOptions.sortKey];
    const bValue = b[sortOptions.sortKey];

    // at the moment this will only work for numbers
    // if you want to sort by strings, we will need to extend
    // the logic to handle that
    return sortOptions.sortDirection === 'asc'
      ? aValue - bValue
      : bValue - aValue;
  });

  const isActiveSortOption = (sortKey, sortDirection) => {
    return (
      sortKey === sortOptions.sortKey &&
      sortDirection === sortOptions.sortDirection
    );
  };

  return (
    <div>
      <Searchbar submit={handleSubmit} />

      <Container>
        <h1>Let us paw you a drink</h1>
        {/* <Searchbar /> */}
        <button
          className={classNames({ active: isActiveSortOption('abv', 'asc') })}
          onClick={() => handleSortClick('abv', 'asc')}
        >
          Sort by ABV - ASC
        </button>
        <button
          className={classNames({ active: isActiveSortOption('abv', 'desc') })}
          onClick={() => handleSortClick('abv', 'desc')}
        >
          Sort by ABV - DESC
        </button>
        <button
          className={classNames({ active: isActiveSortOption('ibu', 'asc') })}
          onClick={() => handleSortClick('ibu', 'asc')}
        >
          Sort by IBU - ASC
        </button>
        <button
          className={classNames({ active: isActiveSortOption('ibu', 'desc') })}
          onClick={() => handleSortClick('ibu', 'desc')}
        >
          Sort by IBU - DESC
        </button>
        <Row>
          {sortedBreweries &&
            sortedBreweries.map((beer) => (
              <div>
                <Card key={beer.id} style={{ width: 200, margin: 5 }}>
                  <a href={`/beers/${beer.id}`}>
                    <Card.Img
                      variant="top"
                      src={beer.image_url == null ? dog : beer.image_url}
                      alt={beer.name}
                      width={200}
                    />
                  </a>
                </Card>
                <Card.Body>
                  <Card.Title>{beer.name}</Card.Title>
                </Card.Body>
              </div>
            ))}
        </Row>
      </Container>
    </div>
  );
};
export default Results;
