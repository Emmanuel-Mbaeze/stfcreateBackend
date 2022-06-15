import React from "react";
import styled from "styled-components";
import img from "./Goody3.png";
import img1 from "./port.png";

const About = () => {
  return (
    <Container id="About">
      <Wrapper>
        <Image src={img} />
        <TextHolder>
          <Text1> My Bio</Text1>
          <span>
            Far far away, behind the word mountains, far from the
            <br />
            countries Vokalia and Consonantia, there live the blind texts
            <br />. Separated they live in Bookmarksgrove right at the coast of
            the
            <br /> Semantics, a large language ocean.
          </span>
          <br />
          <br />

          <div>
            A small river named Duden flows by their place and supplies it
            <br /> with the necessary regelialia. It is a paradisematic country,
            in which
            <br /> roasted parts of sentences fly into your mouth.
          </div>
          <Image1 src={img1} />
          <Button>Hire Me</Button>
        </TextHolder>
      </Wrapper>
    </Container>
  );
};

export default About;
const Container = styled.div`
  padding-top: 70px;
  height: 100vh;
  width: 100vw;
  background-color: white;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;

  // height: 40rem;
  // width: 100vw;
`;

const Image = styled.img`
  object-fit: cover;
`;

const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
`;

const Text1 = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: black;
`;

const Image1 = styled.img`
  object-fit: cover;
  height: 50%;
  margin-top: 20px;
  margin-right: 40px;
`;

const Button = styled.div`
  height: 40px;
  width: 100px;
  border-radius: 10px;
  background-color: #f1ace3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  cursor: pointer;
  &:hover {
    opacity: 1;
    color: black;
    background-color: white;
    border: 1px solid black;
    transition: all 350ms;
  }
`;
