import React from 'react';
import Form from 'react-bootstrap/Form';

const Searchbar = () => {
  const [search, setSearch] = useState('lager');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('this works!');

    const fetchResults = async () => {
      let response = await fetch(
        `https://api.punkapi.com/v2/beers?beer_name=${search}`
      );
      let data = await response.json();
      console.log(data);
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
