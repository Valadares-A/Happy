import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageMap = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Aside = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  padding: 80px;

  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 24px;
    margin-top: 24px;
  }

  footer {
    line-height: 24px;
    strong {
      font-weight: 800;
    }
  }
`;

export const LinkWrapper = styled(Link)`
  position: absolute;
  bottom: 40px;
  right: 40px;

  height: 64px;
  width: 64px;

  background-color: #15c3d6;
  border-radius: 20px;

  z-index: 10;

  transition: background-color 0.2s ease-in-out;
  :hover {
    background-color: #17e6eb;
  }
`;
