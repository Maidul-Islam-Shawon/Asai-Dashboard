import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SidebarAnt from "./SidebarAnt";

const DashboardAnt = (props) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <SidebarAnt />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <div className="page-content-wrapper-text">
              <h2>Demo for ASA International</h2>
              <h2>Sidebar Dropdown</h2>
              <p>
                Click on the dropdown button to open the dropdown menu inside the side
                navigation.
              </p>
              <p>This sidebar is of full height (100%) and always shown.</p>
              <p>Some random text..</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardAnt;
