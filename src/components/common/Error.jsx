/* eslint-disable react/destructuring-assignment */
// Package dependencies
import React from 'react';
import styled from 'styled-components';
import * as Sentry from '@sentry/browser';
import colors from 'Colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFlushed,
} from '@fortawesome/free-solid-svg-icons';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, eventId: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <MessageContainer>
            <TextContainer>
              <Heading>
                Something broke...
                {' '}
                <FontAwesomeIcon icon={faFlushed} />
              </Heading>
            </TextContainer>
            <TextContainer>
                Don&#39;t fear!  We have the data from this error and will get to the bottom of it.  Refreshing will probably fix the issue for you.
            </TextContainer>
            <TextContainer>
                Use the button below to help us out by telling us what happened.
            </TextContainer>
            <Button onClick={() => Sentry.showReportDialog({ eventId: this.state.eventId })}>Give Feedback on the Error</Button>
          </MessageContainer>
        </Container>
      );
    }
    return this.props.children;
  }
}

// Styling
const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .7);
    z-index: 100;
    top: 0;
    left: 0;
`;

const MessageContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px 30px;
  margin-top: 50px;
  box-shadow: 0 1px 2.5px rgba(0,0,0,0.5);
  width: 500px;

  @media(max-width: 630px) {
    width: 100%;
    margin: 50px 20px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
  text-align: center
`;

const Heading = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: ${colors.LITS.color};

  @media(max-width: 500px) {
    font-size: 22px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px 21px;
  border-radius: 5px;
  background-color: ${colors.LITS.color};
  font-size:16px;
  color: white;
  font-weight: 700;
  text-decoration:none;
  border: 1px solid black;
  box-shadow: 0 1px 1px black, 0 2px 5px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.2);
  border-color: rgba(0,0,0,0.2) rgba(0,0,0,0.35) rgba(0,0,0,0.55);
  border-bottom-width: 2px;
  cursor: pointer;
`;
