import React from 'react';
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import LocationCard from '../components/LocationCard';
import axios from 'axios';
// import speedlimitrefs from '../speedlimitrefs';

const HomeScreen = () => {
  const [speedlimitrefs, setSpeedlimitrefs] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const { data } = await axios.get('/api/locations');

      setSpeedlimitrefs(data);
    };
    fetchLocations();
  }, []);
  // the last field is called dependency to make this fire off it that var changes

  return (
    <>
      <h1>All the location under control</h1>
      <Row>
        {speedlimitrefs.map((ref) => (
          <Col key={ref._id} sm={12} md={6} lg={4} xl={3}>
            {/* <h3>{ref.location}</h3> */}
            <LocationCard location={ref} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
