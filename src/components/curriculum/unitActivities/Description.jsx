// Package dependencies
import React, {useState} from 'react';


// Component dependencies
import More from './More';


/***************************************/
// Component for the description of activities
/***********************************/
export default function Description(props) {
  const [more, setMore] = useState(false);
  const desc = props.description;
  const cutoff = props.cutoff || defaultCutoff;
  const description = !more && desc? desc.slice(0, cutoff):desc;
  return(
    <div>
      {description}
      <More setMore={setMore} more={more}/>
    </div>
  )
}

// Constants
const defaultCutoff = 60;