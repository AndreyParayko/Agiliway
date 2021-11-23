import styled from 'styled-components';

export const StyledHeaderWrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: #24252a;
  opacity: 0.95;
`;
export const StyledLogo = styled.div`
  cursor: pointer;
  margin-right: auto;
  vertical-align: middle;
`;
export const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 10px 10%;
  align-items: center;
  cursor: pointer;
`;
export const StyledImg = styled.img`
  display: inline-block;
`;
export const StyledParagraph = styled.span`
  display: inline-block;
  color: rgb(168, 142, 24);
  font-size: 20px;
  font-weight: bold;
  vertical-align: middle;
`;
export const StyledUl = styled.ul`
  list-style: none;
  margin-left: 20px;
  margin-top: 1em;

  & > li {
    display: inline-block;
    padding: 0px 20px;
    font-weight: 500;
    font-size: 15px;
    color: white;
  }
  & > a {
    transition: color 0.3s ease 0s;
    font-weight: 500;
    font-size: 15px;
    color: white;
  }
  & a:hover {
    color: rgb(168, 142, 24);
    border-bottom: 1px solid;
  }
`;
