import { NavLink } from "react-router-dom";
import "./Header.scss";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as NavDirect,
} from "reactstrap";
const Header = () => {
  return (
    <div>
      <Navbar color="info" light expand="md">
        <NavbarBrand>Task.react</NavbarBrand>

        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavDirect>
              <NavLink className='nav-item' activeClassName="nav-active" to="/Todo/">
                Todo
              </NavLink>
            </NavDirect>
          </NavItem>
          <NavItem>
            <NavDirect>
              <NavLink className='nav-item' activeClassName="nav-active" to="/TestForm/">
                Form
              </NavLink>
            </NavDirect>
          </NavItem>
          <NavItem>
            <NavDirect>
              <NavLink className='nav-item' activeClassName="nav-active" to="/FinalForm">
                Final Form
              </NavLink>
            </NavDirect>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
