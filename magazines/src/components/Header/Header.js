import React from "react";
import logo from "../../assets/images/logo.svg";
import StyledHeaderWrapper from "./styled";
import {
  StyledLogo,
  StyledHeader,
  StyledImg,
  StyledParagraph,
  StyledUl,
} from "./styled";
import { NavLink } from "react-router-dom";
import "./styles.scss";


const Header = () => {
  return (
    <>
    <StyledHeaderWrapper>
      <StyledHeader>
        <StyledLogo>
          <StyledImg src={logo} height="60px" alt="MAGAZINE" />
          <StyledParagraph>TRAINEE MAGAZINES</StyledParagraph>
        </StyledLogo>
          <StyledUl>
            <li>
              <NavLink className="nav-item" to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-item"
              
                to="/magazines"
              >
                Magazines
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-item"
                
                to="/statistic"
              >
                Statistic
              </NavLink>
            </li>
          </StyledUl>
      </StyledHeader>
    </StyledHeaderWrapper>
  </>
  );
};

export default Header;
