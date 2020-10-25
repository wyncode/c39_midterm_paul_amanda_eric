import React from 'react';
import { useHistory } from 'react-router-dom';

const Beerinfo = () => {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };
  return (
    <div>
      <button onClick={handleClick}>Back</button>
      <h1>Here's the Beer Info</h1>;
      <img />
      <p>Info out the beer</p>
    </div>
  );
};
export default Beerinfo;
