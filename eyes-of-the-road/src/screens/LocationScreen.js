import React from 'react';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import speedlimitrefs from '../speedlimitrefs';

const LocationScreen = ({ match }) => {
  // match is use to find the :id in url
  const limitref = speedlimitrefs.find((ref) => ref._id === match.params.id);
  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        {/* Make 2 columns to show different stuff */}
        <Col md={6}>
          <h1>{limitref.location}</h1>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <h3>{limitref.zipcode}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Speed Limit: {limitref.speedlimit}Kmph</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h3>Status: {limitref.status}</h3>
          {limitref.status === 'Active' ? (
            <Button variant="danger" className="btn-block" type="button">
              Disable
            </Button>
          ) : (
            <Button variant="info" className="btn-block" type="button">
              Enable
            </Button>
          )}
        </Col>
      </Row>

      <h4>More to come here [ask hari haran]</h4>
      <h4>Like changing speed limit and monitoring and stuff</h4>
    </>
  );
};

export default LocationScreen;
