import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import {
  StyledHeaderWrapper,
  StyledLogo,
  StyledHeader,
  StyledImg,
  StyledParagraph,
  StyledUl,
} from './styled';

import './styles.scss';

const Header = () => (
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
          <NavLink className="nav-item" to="/magazines">
            Magazines
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/statistic">
            Statistic
          </NavLink>
        </li>
      </StyledUl>
    </StyledHeader>
  </StyledHeaderWrapper>
);

export default Header;
