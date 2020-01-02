// Package dependencies
import React, {Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
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
        faQuestionCircle
       } from '@fortawesome/free-solid-svg-icons';
import {
        faListAlt
       } from '@fortawesome/free-regular-svg-icons';


/************************************************/
// Component for displaying icons
/************************************************/
export default function Icon(props){
  return(
    <Fragment>
      <FontAwesomeIcon 
        icon={iconList[props.icon]} 
        style={{'marginLeft':'5px', 'marginRight':'5px'}}/>
    </Fragment>
  )
}


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
  question: faQuestionCircle
}