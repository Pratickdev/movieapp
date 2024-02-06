import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartCheckFill } from "react-bootstrap-icons";
import { useContext } from "react";
import { CountContext } from "../src/Home";
import { useSelector } from "react-redux";
export default function Head() {
  const [login, setLogin] = useState("");
  const loginStatus = useSelector((state) => state.Login.status);
  const localData = "" + localStorage.getItem("login");
  let cartCount = useContext(CountContext);
  cartCount = cartCount.count;
  let location = useLocation();
  useEffect(() => {
    if (loginStatus != "") {
      setLogin(loginStatus);
      //console.log(loginStatus);
    } else {
      setLogin(localData);
    }
  }, [location]);
  return (
    <div className="head">
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link active" aria-current="page" to="/">
              My Netflix
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                className={
                  location.pathname ==='/'
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/"
              >
                Trending
              </Link>
              <Link className={
                  location.pathname ==="/movie"
                    ? "nav-link active"
                    : "nav-link"
                } to="/movie">
                Movie
              </Link>
              <Link className={
                  location.pathname ==="/web"
                    ? "nav-link active"
                    : "nav-link"
                } to="/web">
                Web
              </Link>
              {login != "" ? (
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
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
