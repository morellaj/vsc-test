// Package dependencies
import React, { useContext } from 'react';
import styled from 'styled-components';
import { EmailShareButton, PinterestShareButton, TwitterShareButton, FacebookShareButton } from 'react-share';

// File dependencies
import SocialIcon from 'SocialIcon';
import CharacterContext from '../CharacterContext';

// Data dependencies
import { homePage } from 'Data/pageHeadInfo.json';
import unitDetails from 'Data/unitDetails.json';

// Component
export default function SocialShare() {
  const { unitSelected } = useContext(CharacterContext);
  const { description } = unitDetails[unitSelected];
  const urlTitle = unitDetails[unitSelected].title.replace(/\s+/g, '-').toLowerCase();
  const { title } = homePage;
  const style = { margin: '3px' };
  const url = `https://learningisthesolution.com/units?${urlTitle}`;
  return (
    <Container>
      <PinterestShareButton
        url={url}
        media={`https://learningisthesolution.com/assets/${urlTitle}-social.png`}
        description={`${title}!  ${description}`}
        style={style}
      >
        <Button>
          <SocialIcon tag="pinterest" />
        </Button>
      </PinterestShareButton>
      <TwitterShareButton
        url={url}
        title={`Check out these free online character development books for kids - ${url}`}
        via="LearnistheSol"
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
        separator=" "
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
const Container = styled.nav`
  margin-right: 10px;
  display: flex;
  align-items: center;

  @media(max-width: 570px) {
    margin-right: 5px;
  }
`;

const Button = styled.div`
  padding: 3px 6px;
  border-radius: 4px;
  border-width: 1px 1px 2px;
  border-style: solid;
  border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.15) rgba(0,0,0,0.25);
  outline: none;
  background-color: #fafafa;
  width: 20px;
  display: flex;
  justify-content: center;

  @media(max-width: 570px) {
    font-size: 14px;
  }
`;
