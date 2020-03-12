// Package dependencies
import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterest, FaEnvelope } from 'react-icons/fa';

// Data dependencies
const iconList = {
  facebook: { Icon: FaFacebookF, color: '#3b5998' },
  twitter: { Icon: FaTwitter, color: '#00aced' },
  pinterest: { Icon: FaPinterest, color: '#cb2027' },
  email: { Icon: FaEnvelope, color: 'black' },
};


// Component
export default function SocialIcon({ tag }) {
  const { Icon, color } = iconList[tag];
  return (
    <Icon style={{ color }} />
  );
}
