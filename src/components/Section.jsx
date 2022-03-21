import React from "react";
import styled from "styled-components";

const Section = (props) => {
  return (
    <Container bgImage={props.bgImage}>
      <HeaderText>
        <h1>{props.title}</h1>
        <p>{props.parag}</p>
      </HeaderText>
      <ButtonGroup>
        <LeftButton>Custom Order</LeftButton>
        <RightButton>Existing Inventory</RightButton>
      </ButtonGroup>
      <ArrowDown src="/images/down-arrow.svg" />
    </Container>
  );
};

export default Section;

const Container = styled.div`
  background-color: blue;
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("./images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  margin: 0;
`;

const HeaderText = styled.div`
  padding-top: 15vh;
  flex-grow: 1;
  text-align: center;
`;

const ButtonGroup = styled.div`
  @media (max-width: 768px) {
    display: block;
  }
  display: flex;
  margin-bottom: 30px;
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  border-radius: 100px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0.85;
  margin: 8px;
  font-weight: 600;
`;

const RightButton = styled(LeftButton)`
  background-color: #fff;
  color: #000;
`;

const ArrowDown = styled.img`
  height: 40px;
  margin-bottom: 12px;
  cursor: pointer;
  animation: animationDown infinite 1.5s;
  color: black;
`;
