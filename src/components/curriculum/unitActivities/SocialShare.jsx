// Package dependencies
import React from 'react';
import styled from 'styled-components';
import SocialIcon from 'SocialIcon';
import {
  EmailShareButton, PinterestShareButton, TwitterShareButton, FacebookShareButton,
} from 'react-share';

import { HomePage } from 'Data/pageHeadInfo.json';

/** ********************************************* */
// Component for displaying the activities section
/** ********************************************* */
export default function SocialShare(props) {
  const {
    unitName, description,
  } = props;
  const { title } = HomePage;
  const style = { margin: '3px' };
  const url = `learningisthesolution.com/units?${unitName}`;
  return (
    <Container>
      <PinterestShareButton
        url={url}
        media={`https://https://debug--xenodochial-hopper-aead1f.netlify.com//assets/${unitName}-social.png`}
        description={title + description}
        style={style}
      >
        <Button>
          <SocialIcon tag="pinterest" />
        </Button>
      </PinterestShareButton>
      <TwitterShareButton
        url={url}
        title={`Check out these free online character development books for kids - ${url}`}
        via="LearningistheSolution"
        style={style}
      >
        <Button>
          <SocialIcon tag="twitter" />
        </Button>
      </TwitterShareButton>
      <FacebookShareButton url={url} style={style}>
        <Button>
          <SocialIcon tag="facebook" />
        </Button>
      </FacebookShareButton>
      <EmailShareButton
        url={url}
        subject="Free online character development books for kids"
        body="Check out these free online character development books for kids!"
        style={style}
      >
        <Button>
          <SocialIcon tag="email" />
        </Button>
      </EmailShareButton>
    </Container>
  );
}

// Styling
const Container = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;

  @media(max-width: 570px) {
    margin-right: 5px;
  }
`;

const Button = styled.div`
  padding: 0 6px;
  border-radius: 4px;
  border-width: 1px 1px 2px;
  border-style: solid;
  border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.15) rgba(0,0,0,0.25);
  outline: none;
  background-color: #fafafa;
  width: 20px;

  @media(max-width: 570px) {
    font-size: 14px;
    padding: 0 2px;
  }
`;
