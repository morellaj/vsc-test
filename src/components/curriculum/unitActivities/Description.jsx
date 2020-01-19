// Package dependencies
import React, { useState } from 'react';


// Component dependencies
import { defaultCutoff } from 'Constants';
import More from './More';

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

Description.defaultProps = {
  cutoff: defaultCutoff,
};
