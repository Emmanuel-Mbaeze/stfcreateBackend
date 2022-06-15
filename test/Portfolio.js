import React from "react";
import styled from "styled-components";
import img from "./logo1.jpg";
import img1 from "./logo2.jpg";
import img2 from "./logo3.jpg";

const Portfolio = () => {
  return (
    <Container id="Portfolio">
      <Text>My Portfolio</Text>
      <Text1>All my packages</Text1>
      <Wrapper>
        <Holder>
          <Image src={img} />
          <Hold>
            <div>Logo </div>
            <p>Graphics Designs</p>
          </Hold>
        </Holder>
        <Holder2>
          <Image2 src={img2} />
          <Hold2>
            <div>Ui/Ux Expert</div>
            <p>User interface and user experience</p>
          </Hold2>
        </Holder2>
        <Holder1>
          <Image1 src={img1} />
          <Hold1>
            <div>React and Node</div>
            <p>Web Development</p>
          </Hold1>
        </Holder1>
      </Wrapper>
    </Container>
  );
};

export default Portfolio;
const Container = styled.div`
  padding-top: 70px;
  height: 100vh;
  width: 100vw;
  background-color: white;
  margin-top: 50px;
`;

const Text = styled.main`
  display: flex;
  justify-content: center;
  font-family: poppins;
  font-weight: bold;
  font-size: 50px;
`;

const Text1 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  flex-wrap: wrap;
`;

const Holder = styled.div`
  position: relative;
  width: 400px;
`;

const Hold = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  font-family: "Quicksand", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s;
  backdrop-filter: blur(5px);

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  div {
    font-size: 2em;
    font-weight: bold;
    transform: translateY(20px);
    transition: transform 0.25s;
    &:hover {
      transform: translateY(0);
    }
  }
  p {
    font-size: 1.25em;
    margin-top: 0.25em;
    transform: translateY(20px);
    transition: transform 0.25s;
    &:hover {
      transform: translateY(0);
    }
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
  display: block;
`;

const Image1 = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
  display: block;
`;

const Image2 = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
  display: block;
`;

const Holder1 = styled.div`
  position: relative;
  width: 400px;
`;

const Holder2 = styled.div`
  position: relative;
  width: 400px;
`;

const Hold2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  font-family: "Quicksand", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s;
  backdrop-filter: blur(5px);

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  div {
    font-size: 2em;
    font-weight: bold;
    transform: translateY(20px);
    transition: transform 0.25s;
    &:hover {
      transform: translateY(0);
    }
  }
  p {
    font-size: 1.25em;
    margin-top: 0.25em;
    transform: translateY(20px);
    transition: transform 0.25s;
    &:hover {
      transform: translateY(0);
    }
  }
`;

const Hold1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  font-family: "Quicksand", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s;
  backdrop-filter: blur(5px);

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  div {
    font-size: 2em;
    font-weight: bold;
    transform: translateY(20px);
    transition: transform 0.25s;
    &:hover {
      transform: translateY(0);
    }
  }
  p {
    font-size: 1.25em;
    margin-top: 0.25em;
    transform: translateY(20px);
    transition: transform 0.25s;
    &:hover {
      transform: translateY(0);
    }
  }
`;
