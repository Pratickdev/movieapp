import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
export default function Head() {
  return (
    <div className="head">
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link active" aria-current="page" to="/">
              My Movie App
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Form.Select aria-label="Default select example">
                <option>Sort By Movie Or Series</option>
                <option value="">Select</option>
                <option value="movie">Movies</option>
                <option value="tv">Web Series</option>
              </Form.Select>
              <Form.Control
                type="text"
                aria-describedby="search"
                placeholder="Search"
              />
            </Nav>
          </Navbar.Collapse>

          <Nav>
            <Badge className="badge" bg="success">
              20
            </Badge>
          </Nav>
          <Nav>
            <Link to="/cart">Cart</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
