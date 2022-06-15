import React from "react";
import { animateScroll as scroll, Link } from "react-scroll";
import styled from "styled-components";

const Toggle = ({ open, toggle }) => {
  return (
    <Container open={open}>
      <Wrapper>
        <Link
          offset={-70}
          activeClass="active"
          to="Home"
          smooth={true}
          duration={1000}
        >
          <span>Home</span>
        </Link>

        <Link
          offset={-70}
          activeClass="active"
          to="About"
          smooth={true}
          duration={1000}
        >
          <span>About</span>
        </Link>

        <Link
          offset={-70}
          activeClass="active"
          to="Portfolio"
          smooth={true}
          duration={1000}
        >
          <span>Portfolio</span>
        </Link>

        <Link
          offset={-70}
          activeClass="active"
          to="Services"
          smooth={true}
          duration={1000}
        >
          <span>Services</span>
        </Link>

        <Link
          offset={-70}
          activeClass="active"
          to="Resume"
          smooth={true}
          duration={1000}
        >
          <span>Resume</span>
        </Link>

        <Link
          offset={-70}
          activeClass="active"
          to="Contact"
          smooth={true}
          duration={1000}
        >
          <span>Contact</span>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Toggle;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 300px;
  height: 80vh;
  border-radius: 0 0 0 10px;
  top: 0;
  left: 250px;
  bottom: 0;
  /* position: fixed; */
  @media screen and (min-width: 768px) {
    display: none;
  }
  opacity: ${({ open }) => (open ? "100%" : "0")};
  top: ${({ open }) => (open ? "0" : "-100%")};
  position: fixed;
  transition: 0.4s ease-in-out;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    text-transform: uppercase;
    cursor: pointer;
    color: black;
  }
`;
