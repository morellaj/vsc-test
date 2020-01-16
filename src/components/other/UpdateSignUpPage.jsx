/* eslint-disable no-return-assign */
// Package dependencies
import React, { useState } from 'react';
import styled from 'styled-components';
import MailchimpSubscribe from 'react-mailchimp-subscribe';


/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function UpdateSignUpPage() {
  let email;
  let firstName;
  let lastName;
  return (
    <MailchimpSubscribe
      url="https://learningisthesolution.us4.list-manage.com/subscribe/post?u=157f2322dea2347f3be3e3c8e&amp;id=9e3e1185de"
      render={({ subscribe, status, message }) => (
        <Container>
          <Sending status={status}>sending...</Sending>
          <Result status={status} dangerouslySetInnerHTML={{ __html: message }} />
          <Input
            ref={(node) => (firstName = node)}
            type="text"
            placeholder="First Name"
          />
          <Input
            ref={(node) => (lastName = node)}
            type="text"
            placeholder="Last Name"
          />
          <Input
            ref={(node) => (email = node)}
            type="email"
            placeholder="Your email"
          />
          <Button
            type="submit"
            onClick={() => {
              subscribe({
                EMAIL: email.value,
                FNAME: firstName.value,
                LNAME: lastName.value,
              });
            }}
          >
      Submit
          </Button>
        </Container>
      )}
    />
  );
}


// Styling
const Container = styled.div`
  background: '#efefef';
  borderRadius: 2;
  padding: 10;
  display: 'inline-block';
`;

const Sending = styled.div`
  color: blue;
  display: ${(props) => (props.status === 'sending' ? 'block' : 'none')}
`;

const Result = styled.div`
  color: ${(props) => (props.status === 'error' ? 'red' : 'green')};
  display: ${(props) => (props.status === 'error' || props.status === 'success' ? 'block' : 'none')};
`;

const Input = styled.input`
  font-size: 2em;
  padding: 5;
`;

const Button = styled.button`
  font-size: 2em;
  padding: 5;
`;
