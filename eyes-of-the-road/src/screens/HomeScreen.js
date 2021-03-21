import React from "react";
import { Col, Row } from "react-bootstrap";
import LocationCard from "../components/LocationCard";
import speedlimitrefs from "../speedlimitrefs";
const HomeScreen = () => {
    return (
        <>
            <h1>All the location under control</h1>
            <Row>
                {speedlimitrefs.map((ref) => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        {/* <h3>{ref.location}</h3> */}
                        <LocationCard location={ref} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;
