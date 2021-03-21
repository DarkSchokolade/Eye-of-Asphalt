import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const LocationCard = ({ location }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Link to={`/location/${location._id}`}>
          <Card.Title as="div">
            <strong>{location.location}</strong>
          </Card.Title>
          <Card.Text as="div">
            <strong>{location.zipcode}</strong>
          </Card.Text>
        </Link>
        {/* <Card.Text as="div">
                    <a href={`/location/${location._id}`}>
                        <strong>{location.zipcode}</strong>
                    </a>
                </Card.Text> */}
      </Card>
    </div>
  );
};

export default LocationCard;
