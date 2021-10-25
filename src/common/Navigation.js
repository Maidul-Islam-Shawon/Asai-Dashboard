import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href as={Link} to="/">ASA International</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href as={Link} to="/">Home</Nav.Link>
            <Nav.Link href as={Link} to="/basic">Basic-Nav</Nav.Link>
            <Nav.Link href as={Link} to="/nav-2">Nav-2</Nav.Link>
            <Nav.Link href as={Link} to="/nav-3">Nav-3</Nav.Link>
            <Nav.Link href as={Link} to="/file-upload">File Upload</Nav.Link>
            <Nav.Link href as={Link} to="/file-convert">File Convert</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


    </>
  );
};

export default Navigation;
