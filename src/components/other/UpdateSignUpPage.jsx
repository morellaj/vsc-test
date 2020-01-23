/* eslint-disable no-return-assign */
// Package dependencies
import React, { useEffect } from 'react';
import styled from 'styled-components';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Navbar from 'Common/Navbar';
import colors from 'Colors';


/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function UpdateSignUpPage() {
  let email;
  let firstName;
  let lastName;
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <Container>
        <MailchimpSubscribe
          url="https://learningisthesolution.us4.list-manage.com/subscribe/post?u=157f2322dea2347f3be3e3c8e&amp;id=9e3e1185de"
          render={({ subscribe, status, message }) => (
            <InputContainer>
              <TextContainer>
                <Heading>Sign up to receive updates</Heading>
                <Disclaimer>Your email address will never be shared or sold</Disclaimer>
              </TextContainer>
              <Label>Email address</Label>
              <Input
                ref={(node) => (email = node)}
                type="email"
                placeholder="Required"
              />
              <Label>First Name</Label>
              <Input
                ref={(node) => (firstName = node)}
                type="text"
                placeholder="Optional"
              />
              <Label>Last Name</Label>
              <Input
                ref={(node) => (lastName = node)}
                type="text"
                placeholder="Optional"
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
              <Sending status={status}>sending...</Sending>
              <Result status={status} dangerouslySetInnerHTML={{ __html: message }} />
            </InputContainer>
          )}
        />
      </Container>
    </>
  );
}


// Styling
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const InputContainer = styled.div`
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

const Disclaimer = styled.div`
  font-size: 12px;
  display: none;
`;

const Sending = styled.div`
  color: blue;
  margin-top: 20px;
  font-size: 14px;
  display: ${(props) => (props.status === 'sending' ? 'block' : 'none')};
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: ${(props) => (props.status === 'error' ? 'red' : 'green')};
  display: ${(props) => (props.status === 'error' || props.status === 'success' ? 'block' : 'none')};
`;

const Label = styled.div`
  margin-bottom: 5px;
`;

const Input = styled.input`
  border: 1px solid black;
  border-color: rgba(0,0,0,0.55) rgba(0,0,0,0.35) rgba(0,0,0,0.2);
  border-top-width: 2px;
  border-radius: 5px;
  padding: 12px;
  width: 100%;
  margin: 0 30px 20px 0;
  box-sizing: border-box;
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

  @media(max-width: 1000px) {

  }

  :hover{
    background-color: ${colors.LITS.darkColor}
  }
`;
