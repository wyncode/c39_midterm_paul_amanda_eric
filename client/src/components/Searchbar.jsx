// import React, { useState, useEffect } from 'react';

import React from 'react';
import Form from 'react-bootstrap/Form';
import Results from '../pages/Results';

const Searchbar = ({ submit }) => {
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
