import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

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
      <button onClick={handleClick}>Back</button>
      <h1>{beerInfo.name}</h1>;
      <img src={beerInfo.image_url} alt="beer photos" />
      <h2>{beerInfo.description}</h2>
      <h2>TEst</h2>
    </div>
  );
};
export default Beerinfo;
