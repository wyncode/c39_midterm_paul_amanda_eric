import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import dog from '../images/dog.jpg';
import Button from 'react-bootstrap/Button';

const Beerinfo = () => {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };
  const [beerInfo, setBeerInfo] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getBeerInfo = async () => {
      const result = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
      const data = await result.json();
      setBeerInfo(data[0]);
    };
    try {
      getBeerInfo();
    } catch (error) {
      alert('Error');
    }
  }, [id]);
  console.log(beerInfo);
  return (
    <div>
      <Navbar />
      <div className="beerPage">
        {/* <button onClick={handleClick}>Back</button> */}
        <Button onClick={handleClick} variant="dark">
          Back
        </Button>{' '}
        <div className="background"></div>
        <h1 className="beerName">{beerInfo.name}</h1>
        <div className="beer-picture">
          <img
            src={beerInfo.image_url == null ? dog : beerInfo.image_url}
            className="beerImage"
          />
        </div>
        <p className="beerDescription"> FACTOIDS: {beerInfo.description}</p>
        <p className="foodPairing">
          {' '}
          Recommended food pairing: {beerInfo.food_pairing}
        </p>
        <p className="beerABV"> abv: {beerInfo.abv}</p>
        <p className="beerIBU"> ibu: {beerInfo.ibu}</p>
        <h2> Interested in brewing your own? </h2>
        <h3>Try this: </h3>
        <p className="beerBrew"> {beerInfo.brewers_tips}</p>
      </div>
    </div>
  );
};
export default Beerinfo;
