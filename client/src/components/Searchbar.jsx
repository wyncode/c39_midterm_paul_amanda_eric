import React from 'react';
import Form from 'react-bootstrap/Form';

const Searchbar = () => {
  const [search, setSearch] = useState('lager');
  const handleSubmit = (event) => {
    event.preventDefault();

    const fetchResults = async () => {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?beer_name=${search}`
      );
      const data = await response.json();
    };
    fetchResults();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control size="lg" type="text" placeholder="Search a Beer!" />
    </Form>
  );
};

export default Searchbar;
