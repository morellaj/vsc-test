/* eslint-disable no-return-assign */
// Package dependencies
import React, { useEffect } from 'react';
import styled from 'styled-components';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Head from 'Head';
import PageHeadInfo from 'Data/pageHeadInfo.json';
import Navbar from 'Navbar';
import Footer from 'Footer';
import colors from 'Colors';
import ReactGA from 'react-ga';


/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function UpdateSignUpPage() {
  const { title, description } = PageHeadInfo.UpdateSignUpPage;
  let email;
  let firstName;
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Head
        title={title}
        description={description}
        url="https://learningisthesolution.com/update-sign-up"
        type="website"
        image="https://learningisthesolution.com/assets/logo-large.jpg"
        height="720px"
        width="1280px"
      />
      <FlexContainer>
        <Navbar />
        <Container>
          <MailchimpSubscribe
            url="https://learningisthesolution.us4.list-manage.com/subscribe/post?u=157f2322dea2347f3be3e3c8e&amp;id=9e3e1185de"
            render={({ subscribe, status, message }) => (
              <InputContainer>
                <TextContainer>
                  <Heading>Receive updates about new content</Heading>
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
                <Button
                  type="submit"
                  onClick={() => {
                    subscribe({
                      EMAIL: email.value,
                      FNAME: firstName.value,
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
        <Footer />
      </FlexContainer>
    </>
  );
}


// Styling
const Container = styled.main`
  display: flex;
  justify-content: center;
  padding-bottom: 90px;
`;

const FlexContainer = styled.main`
  display: flex;
  flex-direction: column;
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
  font-size: 25px;
  font-weight: 500;
  color: ${colors.LITS.color};

  @media(max-width: 500px) {
    font-size: 20px;
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
`;
