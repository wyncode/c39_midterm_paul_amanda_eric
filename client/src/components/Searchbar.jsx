import React from 'react';
import Form from 'react-bootstrap/Form';
// import Results from '../pages/Results';


const Searchbar = ({ submit }) => {
  return (
    <div>
      <Form  onSubmit={submit}>
        <Form.Control style={{textAlign: 'center'}}
          id="searchbar"
          size="lg"
          type="text"
          placeholder="Search a Beer! 🔍"
        />
      </Form>

      {/* <Results data={apiData} /> */}
    </div>
  );
};

export default Searchbar;
