
// Package dependencies
import React from 'react';
import styled from 'styled-components';
import Error from 'Error';
import ActivityGroup from './ActivityGroup';
import SingleActivity from './SingleActivity';
import ParentInformation from './ParentInformation';

/** ************************************ */
// Component for the description of activities
/** ******************************** */
export default function ActivityDisplay(props) {
  const { list, setInfo, unit: { title } } = props;
  const unit = title.replace(/\s+/g, '-').toLowerCase();
  const singleDisplay = [];
  const multipleDisplay = [];

  singleDisplay.push(
    <ActivityGroup
      text="Parent Info"
      setInfo={setInfo}
      category="parent"
      activities={<ParentInformation unit={unit} setInfo={setInfo} />}
      key="parent"
    />,
  );

  const categories = Object.keys(list);
  const catValues = Object.values(list);

  for (let i = 0; i < categories.length; i += 1) {
    const activities = [];
    const activityList = Object.keys(catValues[i].activities);
    const actValues = Object.values(catValues[i].activities);
    for (let j = 0; j < activityList.length; j += 1) {
      activities.push(<SingleActivity title={actValues[j].title} key={activityList[j]} />);
    }
    const display = (
      <ActivityGroup
        text={catValues[i].text}
        setInfo={setInfo}
        category={categories[i]}
        activities={activities}
        key={categories[i]}
      />
    );

    if (activities.length > 1) {
      multipleDisplay.push(display);
    } else {
      singleDisplay.push(display);
    }
  }

  return (
    <Container>
      <Error><MultipleContainer>{multipleDisplay}</MultipleContainer></Error>
      <Error><SingleContainer>{singleDisplay}</SingleContainer></Error>
    </Container>
  );
}


ActivityDisplay.defaultValues = {
  title: 'Loading...',
};


// Styling
const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media(max-width: 570px){
    flex-direction: column;
    align-items: center;
  }
`;

const SingleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;


  @media(max-width: 1000px){
    width: 260px;
  };

  @media(max-width: 570px){
    flex-direction: column-reverse;
  };

  @media(max-width: 460px){
    width: 300px;
  };
`;

const MultipleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-right: 20px;


  @media(max-width: 1000px) {
    width: 500px;
  };
  

  @media(max-width: 800px) {
    flex-direction: column;
    width: 280px;
  };

  @media(max-width: 570px) {
    width: 100%;
    margin-right: 0;
  };
`;
