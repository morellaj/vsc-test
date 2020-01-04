// Package dependencies
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';


// Component dependencies and data files
import UnitList from './unitList/UnitList';
import UnitActivities from './unitActivities/UnitActivities';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import TopicSubmission from './TopicSubmission';
import Feedback from './Feedback';
import UnitArr from './UnitArr';
import { colors, character } from '../../master.json';

// Constants
const unitNumbers = ['hurting-others', 'critical-thinking', 'honesty'];


/** ********************************************* */
// Component for displaying the science page
/** ********************************************* */
export default function CharacterPage() {
  const [unitSelected, setUnitSelected] = useState(0);
  const [done, setDone] = useState(false);
  const location = window.location.search.slice(1);
  const url = window.location.href;
  const newUrl = url.replace(`?${location}`, '');
  const locationUnit = unitNumbers.indexOf(location) !== -1
    ? unitNumbers.indexOf(location) : unitSelected;
  // eslint-disable-next-line no-restricted-globals
  history.pushState({ id: unitNumbers[unitSelected] }, 'Stuff', `${newUrl}?${unitNumbers[unitSelected]}`);
  if (locationUnit !== unitSelected && !done) {
    setUnitSelected(locationUnit);
    setDone(true);
  }
  const unitArr = UnitArr(character);
  const colorTheme = unitArr.length ? colors[unitArr[unitSelected].unit.charAt(0)] : null;
  const theme = colorTheme ? {
    color: colorTheme.color,
    darkColor: colorTheme.darkColor,
    lightColor: colorTheme.lightColor,
    litsColor: colors.LITS.color,
  } : {};

  const unitName = unitArr[unitSelected].unit;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        <ActivitiesContainer>
          <UnitList
            unitList={unitArr}
            unitSelected={unitSelected}
            setUnitSelected={setUnitSelected}
          />
          <UnitActivities unit={character[unitName]} unitName={unitName} />
        </ActivitiesContainer>
        <TopicSubmission />
        <Feedback />
        <Footer />
      </ThemeProvider>
    </>
  );
}


// Styling
const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px 0 0 0;
  padding-bottom: 50px;
`;
