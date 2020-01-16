// Package dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faExpandArrowsAlt,
  faCompressArrowsAlt,
  faChild,
  faSmileBeam,
  faMoneyBillWaveAlt,
  faGraduationCap,
  faHandshake,
  faBookReader,
  faFileAlt,
  faTv,
  faQuestionCircle,
  faInfoCircle,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import {
  faListAlt,
} from '@fortawesome/free-regular-svg-icons';


// Constants
const iconList = {
  book: faBook,
  expand: faExpandArrowsAlt,
  compress: faCompressArrowsAlt,
  list: faListAlt,
  child: faChild,
  pretend: faSmileBeam,
  smile: faSmileBeam,
  quiz: faGraduationCap,
  smart: faGraduationCap,
  money: faMoneyBillWaveAlt,
  shake: faHandshake,
  reader: faBookReader,
  text: faFileAlt,
  show: faTv,
  question: faQuestionCircle,
  info: faInfoCircle,
  comment: faCommentDots,
};

/** ********************************************* */
// Component for displaying icons
/** ********************************************* */
export default function Icon(props) {
  const { icon } = props;
  return (
    <>
      <FontAwesomeIcon
        icon={iconList[icon]}
        style={{ marginLeft: '5px', marginRight: '5px' }}
      />
    </>
  );
}

// Props validation
Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};
