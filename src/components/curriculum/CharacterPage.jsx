// Package dependencies
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ReactGA from 'react-ga';
import queryString from 'query-string';

// File dependencies
import Error from 'Error';
import { setUnit } from 'Actions';
import UnitList from './unitList/UnitList';
import UnitActivities from './unitActivities/UnitActivities';
import CharacterContext from './CharacterContext';
import Head from 'Common/Head';
import InformationDisplay from './info/InformationDisplay';
import urlifyTitle from 'Common/urlifyTitle';


// Data dependencies
import colors from 'Colors';
import unitDetails from 'Data/unitDetails.json';
import { baseUrl } from 'Constants';

// Component
export default function CharacterPage() {
  const [unitSelected, setUnitSelected] = useState('I-1');
  const [info, setInfo] = useState({});
  const { title, searchTitle, searchDescription } = unitDetails[unitSelected];
  const urlTitle = urlifyTitle(title);

  const 
  const fullLocation = window.location.search.slice(1);
  const location = fullLocation.split('&')[0].split('=')[0];
  const url = window.location.href;
  const newUrl = url.replace(`?${fullLocation}`, '');
  let headTitle = searchTitle;
  let headDescription = searchDescription;
  const headUrl = `${baseUrl}units?${location}`;

  const colorTheme = colors[unitSelected.charAt(0)];
  const theme = colorTheme ? {
    color: colorTheme.color,
    darkColor: colorTheme.darkColor,
    lightColor: colorTheme.lightColor,
    litsColor: colors.LITS.color,
  } : {};

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
    headTitle = '';
    headDescription = '';
    if (location !== '') {
      const keys = Object.keys(unitDetails);
      for (let i = 0; i < keys.length; i += 1) {
        if (location === unitDetails[keys[i]].title.replace(/\s+/g, '-').toLowerCase()) {
          setUnit(keys[i]);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    ReactGA.modalview(window.location.pathname + window.location.search);
    window.history.replaceState({ id: urlTitle }, 'Stuff', `${newUrl}?${urlTitle}`);
  }, [unitSelected]);


  return (
    <ThemeProvider theme={theme}>
      <CharacterContext.Provider value={{ unitSelected, setUnitSelected, info, setInfo }}>
        <Head
          title={headTitle}
          description={headDescription}
          url={headUrl}
          type="website"
          image={`${baseUrl}assets/${urlTitle}-social.jpg`}
          height="500"
          width="500"
        />
        <Error>
          <Container>
            <UnitsContainer>
              <UnitList />
              <UnitActivities />
            </UnitsContainer>
          </Container>
        </Error>
        <InformationDisplay />
      </CharacterContext.Provider>
    </ThemeProvider>
  );
}


// Styling
const Container = styled.main`
  display: flex;
  justify-content: center;
  margin: 30px 10px 0 10px;
  padding-bottom: 120px;
`;

const UnitsContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;

  @media(max-width: 800px) {
    width: 600px;
  }

  @media(max-width: 570px){
    width: 440px;
  }
`;
