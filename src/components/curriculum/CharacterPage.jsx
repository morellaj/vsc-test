// Package dependencies
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import loadable from '@loadable/component';


// Component dependencies and data files
import colors from 'Colors';
import character from 'Data/character.json';
import { characterUnitNumbers } from 'Constants';
import Navbar from 'Common/Navbar';
import UnitList from './unitList/UnitList';
import UnitActivities from './unitActivities/UnitActivities';
import UnitArr from './UnitArr';

const InformationDisplay = loadable(() => import('./info/InformationDisplay'));
const Input = loadable(() => import('Common/Input'));

/** ********************************************* */
// Component for displaying the science page
/** ********************************************* */
export default function CharacterPage() {
  const [unitSelected, setUnitSelected] = useState(0);
  const [done, setDone] = useState(false);
  const [info, setInfo] = useState();
  const location = window.location.search.slice(1);
  const url = window.location.href;
  const newUrl = url.replace(`?${location}`, '');
  const locationUnit = characterUnitNumbers.indexOf(location) !== -1
    ? characterUnitNumbers.indexOf(location) : unitSelected;
  window.history.replaceState({ id: characterUnitNumbers[unitSelected] }, 'Stuff', `${newUrl}?${characterUnitNumbers[unitSelected]}`);
  if (!done) {
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

  const infoDisplay = info
    ? <InformationDisplay info={info} setInfo={setInfo} unit={unitName} /> : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Container>
          <UnitList
            unitList={unitArr}
            unitSelected={unitSelected}
            setUnitSelected={setUnitSelected}
          />
          <UnitActivities
            unit={character[unitName]}
            unitName={unitName}
            setInfo={setInfo}
          />
        </Container>
        <Input />
        {infoDisplay}
      </ThemeProvider>
    </>
  );
}


// Styling
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px 0 0 0;
  min-height: 800px;

  @media(max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    min-height: 0;
  }
`;
