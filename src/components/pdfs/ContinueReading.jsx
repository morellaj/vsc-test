// Package dependencies
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'Styles';
import colors from 'Colors';

// Component for the controls on the pdf page
export default function ContinueReading(props) {
  const [show, setShow] = useState(true);
  const {
    initialPage, setInitialPage, setPage, setLastPage, scale,
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

  const style = { height: scale * 540 };

  return (
    <Container initialPage={initialPage} show={show} style={style}>
      <InnerContainer>
        <Label>{`Continue from page ${initialPage}?`}</Label>
        <ButtonContainer>
          <NewButton onClick={handleContinue} style={{ marginRight: '20px' }}>Continue</NewButton>
          <NewButton onClick={handleStartOver}>Start Over</NewButton>
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: ${(props) => ((props.show && props.initialPage !== 1) ? 'flex' : 'none')};
`;

const InnerContainer = styled.div`
  background-color: white;
  ;
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

const NewButton = styled(Button)`
  width: 7vw;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;

  @media(max-width: 1000px) {
    width: 70px;
  }

  :hover{
    background-color: ${colors.LITS.darkColor}
  }
`;
