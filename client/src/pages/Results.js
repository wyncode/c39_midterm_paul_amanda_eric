import React from 'react';

import { Row, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const Results = ({ data }) => {
  return (
    <Container>
      <h1>Let us paw you a drink</h1>

      <Row>
        {data &&
          data.map((beer) => (
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
          ))}
      </Row>
    </Container>
  );
};
export default Results;
