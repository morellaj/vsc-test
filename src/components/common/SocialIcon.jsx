// Package dependencies
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

// Data dependencies
const iconList = {
  facebook: { icon: faFacebookF, color: '#3b5998' },
  twitter: { icon: faTwitter, color: '#00aced' },
  pinterest: { icon: faPinterest, color: '#cb2027' },
  email: { icon: faEnvelope, color: 'black' },
};


// Component
export default function UnitActivities(props) {
  const { tag } = props;
  const { icon, color } = iconList[tag];
  return (
    <FontAwesomeIcon icon={icon} style={{ color }} />
  );
}
