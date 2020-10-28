import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Randombeer = () => {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };
  const refreshPage = () => {
    window.location.reload();
  };
  const [randomBeerInfo, setRandomBeerInfo] = useState({});

  useEffect(() => {
    const getRandomBeerInfo = async () => {
      const result = await fetch(`https://api.punkapi.com/v2/beers/random`);
      const data = await result.json();
      setRandomBeerInfo(data[0]);
    };
    try {
      getRandomBeerInfo();
    } catch (error) {
      alert('Error');
    }
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Back</button>
      <button onClick={refreshPage}>Give Me Another!</button>
      <h1>{randomBeerInfo.name}</h1>;
      <img src={randomBeerInfo.image_url} />
      <h2>{randomBeerInfo.description}</h2>
    </div>
  );
};
export default Randombeer;
