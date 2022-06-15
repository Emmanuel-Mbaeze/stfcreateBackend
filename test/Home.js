import React from "react";
import styled from "styled-components";
import image from "./gg.png";

const Home = () => {
  return (
    <Container id="Home">
      <Wrapper>
        <Image src={image} />
        <Hold>
          <Text>I'm Goodluck Ogbonna , a Full-Stack Developer</Text>
          <Text1>A Portfolio Website made by Goodluck</Text1>
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  flex-wrap: wrap;
  background-color: purple;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
`;

const Hold = styled.div`
  position: absolute;
`;

const Text = styled.div``;

const Text1 = styled.div``;
