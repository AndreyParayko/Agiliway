import React from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";

const Header = () => {
  return (
    <div>
      <Navbar className="navbar" expand="md">
        <NavbarBrand className="text-primary" href="/">
          Agilibooks
        </NavbarBrand>
        <NavbarToggler />

        <Nav className="mr-auto nav" tabs>
          <NavItem>
            <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
              to="/"
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              activeClassName="nav-link-active"
              className="nav-link"
              to="/books"
            >
              Books
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
