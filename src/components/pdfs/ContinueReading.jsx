// Package dependencies
import React, { useState } from 'react';
import styled from 'styled-components';

// Component dependencies
import colors from 'Colors';

// Component for the controls on the pdf page
export default function ContinueReading(props) {
  const [show, setShow] = useState(true);
  const {
    initialPage, setInitialPage, setPage, setLastPage,
  } = props;

  function handleContinue() {
    setShow(false);
  }

  function handleStartOver() {
    setInitialPage(1);
    setPage(1);
    setLastPage(1);
    setShow(false);
  }

  return (
    <Container initialPage={initialPage} show={show}>
      <InnerContainer>
        <Label>{`Continue from page ${initialPage}?`}</Label>
        <ButtonContainer>
          <Button onClick={handleContinue} style={{ marginRight: '20px' }}>Continue</Button>
          <Button onClick={handleStartOver}>Start Over</Button>
        </ButtonContainer>
      </InnerContainer>
    </Container>
  );
}


const Container = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 100;
  display: ${(props) => ((props.show && props.initialPage !== 1) ? 'flex' : 'none')};
`;

const InnerContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px 30px;
  box-shadow: 0 1px 2.5px rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media(max-width: 630px) {
    width: 100%;
    margin: 50px 20px;
  }
`;

const Label = styled.div`
  font-size: 1.7vw;
  font-weight: 900;
  text-align: center;

  @media(max-width: 1000px) {
    font-size: 16px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.div`
  padding: 1vw 1.4vw;
  width: 7vw;
  border-radius: 5px;
  background-color: ${colors.LITS.color};
  font-size: 1.5vw;
  color: white;
  font-weight: 700;
  border: 1px solid black;
  box-shadow: 0 1px 1px black, 0 2px 5px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.2);
  border-color: rgba(0,0,0,0.2) rgba(0,0,0,0.35) rgba(0,0,0,0.55);
  border-bottom-width: 2px;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;

  @media(max-width: 1000px) {
    font-size: 14px;
    padding: 10px 15px;
    width: 70px;
  }

  :hover{
    background-color: ${colors.LITS.darkColor}
  }
`;
