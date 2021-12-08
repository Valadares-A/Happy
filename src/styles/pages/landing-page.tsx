import styled from "styled-components";
import { Link } from "react-router-dom";

export const LandingPageContainer = styled.div`
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  width: 100vw;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 680px;

  background: url("../../images/landing.svg") no-repeat 80% center;

  main {
    max-width: 350px;
  }
  main h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }
  main p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 32px;
  }
`;

export const Location = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 24px;
  line-height: 34px;
  text-align: right;
  strong {
    font-weight: 800;
  }
`;

export const EnterApp = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;

  height: 80px;
  width: 80px;

  background-color: #ffd666;
  border-radius: 30px;

  transition: background-color 0.2s ease-in-out;
  :hover {
    background-color: #96feff;
  }
`;

export const LinkWrapper = styled(Link)`
  position: absolute;
  bottom: 0;
  right: 0;

  height: 80px;
  width: 80px;

  background-color: #ffd666;
  border-radius: 30px;

  transition: background-color 0.2s ease-in-out;
  :hover {
    background-color: #96feff;
  }
`;
