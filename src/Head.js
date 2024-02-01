import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form } from "react-bootstrap";
import { CartCheckFill } from "react-bootstrap-icons";
import { useContext } from "react";
import { CountContext } from "../src/App";
export default function Head() {
  let cartCount= useContext(CountContext);
  cartCount=cartCount.count;
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
              <Link className="nav-link active" to="/">
                Trending
              </Link>
              <Link className="nav-link" to="/movie">
                Movie
              </Link>
              <Link className="nav-link" to="/web">
                Web
              </Link>
              <Form.Control
                type="text"
                aria-describedby="search"
                placeholder="Search"
              />
            </Nav>
            <Nav className="pos">
              <Nav.Link>{cartCount}</Nav.Link>
              <Nav.Link>
                <Link to="/cart">
                  <CartCheckFill color="grey" size={20} />
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
