import React, { useState } from "react";
import styled from "styled-components";
import Image from "./mylogo1.png";
import { animateScroll as scroll, Link } from "react-scroll";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import { AiOutlineMenuFold } from "react-icons/ai";

const HeaderNav = ({ clr, good, toggle }) => {
  return (
    <Container
      style={{
        backgroundColor: clr,
        borderBottom: good,
      }}
    >
      <Logo
        src={Image}
        onClick={() => {
          scroll.scrollToTop();
        }}
      />
      <Wrapper>
        <Link
          offset={-70}
          activeClass="active"
          to="Home"
          smooth={true}
          duration={1000}
        >
          <div>Home</div>
        </Link>

        <Link
          offset={-70}
          activeClass="active"
          to="About"
          smooth={true}
          duration={1000}
        >
          <div>About</div>
        </Link>

        <Link
          offset={-70}
          activeClass="active"
          to="Portfolio"
          smooth={true}
          duration={1000}
        >
          <div>Portfolio</div>
        </Link>

        <Link
          offset={-70}
          activeClass="active"
          to="Services"
          smooth={true}
          duration={1000}
        >
          <div>Services</div>
        </Link>

        <Link
          offset={-70}
          activeClass="active"
          to="Resume"
          smooth={true}
          duration={1000}
        >
          <div>Resume</div>
        </Link>

        <Link
          offset={-70}
          activeClass="active"
          to="Contact"
          smooth={true}
          duration={1000}
        >
          <div>Contact</div>
        </Link>
      </Wrapper>
      <span>
        <AiOutlineMenuFold onClick={toggle} />
      </span>
    </Container>
  );
};

export default HeaderNav;

const Logo = styled.img`
  width: 150px;
  height: 80px;
  object-fit: contain;
  margin-top: 10px;
`;

const Container = styled.div`
  width: 100vw;
  height: 70px;
  // background-color: #22272e;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1;
  font-size: 40px;
  span {
    @media screen and (min-width: 768px) {
      display: none;
    }
    margin-left: 330px;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  /* margin-left: 200px; */
  justify-content: center;
  flex: 1;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }

  div {
    font-size: 12px;
    margin: 0 20px;
    opacity: 0.6;
    color: black;
    font-weight: bold;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
      opacity: 1;
      color: #f1ace3;
      transition: all 350ms;
    }
  }
`;
