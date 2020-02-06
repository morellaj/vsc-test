/* eslint-disable react/destructuring-assignment */
// Package dependencies
import React from 'react';
import styled from 'styled-components';
import * as Sentry from '@sentry/browser';

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
      return <Container onClick={() => Sentry.showReportDialog({ eventId: this.state.eventId })}>Report feedback</Container>;
    }

    return this.props.children;
  }
}

// Styling
const Container = styled.div`
    position: fixed;
    color: red;
    display: inline-block;
    text-align: center;
    font-size: 30px;
    top: 0;
    left: 200px;
`;
