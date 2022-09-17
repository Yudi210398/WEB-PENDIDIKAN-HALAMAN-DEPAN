import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "./logo/Logo-Esa-Unggul.png";
import "./navbar.css";
function Navbarss() {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              width="70"
              height="60"
              className="d-inline-block align-top"
              alt="logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/profile">
                Halaman Profile
              </NavLink>
              {/* <NavLink className="nav-link" to="/visimisi">
                Visi dan misi
              </NavLink>
              <NavLink className="nav-link" to="/produks">
                Produk kami
              </NavLink>

              <NavLink className="nav-link" to="/kontakKami">
                kontak kami
              </NavLink>
              <NavLink className="nav-link" to="/aboutus">
                About US
              </NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Navbarss;
