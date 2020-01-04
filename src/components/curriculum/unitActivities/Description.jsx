// Package dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';


// Component dependencies
import More from './More';

// Constants
const defaultCutoff = 60;

/** ************************************ */
// Component for the description of activities
/** ******************************** */
export default function Description(props) {
  const [more, setMore] = useState(false);
  const { cutoff, description } = props;
  const display = !more && description ? description.slice(0, cutoff) : description;
  return (
    <div>
      {display}
      <More setMore={setMore} more={more} />
    </div>
  );
}


// Props validation
Description.propTypes = {
  cutoff: PropTypes.number,
  description: PropTypes.string.isRequired,
};

Description.defaultProps = {
  cutoff: defaultCutoff,
};
