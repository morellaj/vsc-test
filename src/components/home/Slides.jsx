// Package dependencies
import React from 'react';
import { Fade } from 'react-slideshow-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function Slides(props) {
  const { pictureList, fadeProperties, type } = props;
  const picList = pictureList.map((pic) => {
    return (
      <SlideContainer key={pic.id}>
        <PicContainer>
          <Pic src={pic.src} />
        </PicContainer>
      </SlideContainer>
    );
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Fade {...fadeProperties}>
      {picList}
    </Fade>
  );
}

// Props validation
Slides.propTypes = {
  pictureList: PropTypes.arrayOf(PropTypes.number).isRequired,
  fadeProperties: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ])).isRequired,
  type: PropTypes.string.isRequired,
};


// Styling
const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const PicContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Pic = styled.img`
  width: 100%;
  max-width: 1100px;
`;
