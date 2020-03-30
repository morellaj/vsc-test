// Package dependencies
import React, { useEffect, lazy, Suspense } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ReactGA from 'react-ga';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';

// File dependencies
import Navbar from 'Navbar';
import Error from 'Error';
import { setUnit } from 'Actions';
import UnitList from './unitList/UnitList';
import UnitActivities from './unitActivities/UnitActivities';
const Footer = lazy(() => import('Footer'));
const Head = lazy(() => import('Head'));
const InformationDisplay = lazy(() => import('./info/InformationDisplay'));

// Data dependencies
import colors from 'Colors';
import character from 'Data/character.json';
import { baseUrl } from 'Constants';

// Component
export default function CharacterPage({ match, location }) {
  const { unitSelected } = useSelector((state) => state.unitReducer);
  const dispatch = useDispatch();
  console.log(match, location);
  console.log(queryString.parse(location.search));
  const { title, searchTitle, searchDescription } = character[unitSelected];
  const urlTitle = title.replace(/\s+/g, '-').toLowerCase();
  const fullLocation = window.location.search.slice(1);
  // const location = fullLocation.split('&')[0].split('=')[0];
  const url = window.location.href;
  const newUrl = url.replace(`?${fullLocation}`, '');
  let headTitle = searchTitle;
  let headDescription = searchDescription;
  const headUrl = `${baseUrl}units?${location}`;

  const schema = [
    {
      "@type": ["CollectionPage"],
      "@id": `${headUrl}/#webpage`,
      "url": headUrl,
      "name": headTitle,
      "isPartOf": {
        "@id": `${baseUrl}#website`
      },
      "inLanguage": "en-US",
      "about": {
        "@id": `${baseUrl}#organization`
      },
      "description": headDescription
    }
  ];

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
      const keys = Object.keys(character);
      for (let i = 0; i < keys.length; i += 1) {
        if (location === character[keys[i]].title.replace(/\s+/g, '-').toLowerCase()) {
          dispatch(setUnit(keys[i]));
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
    <>
      <Suspense fallback={<div />}>
        <Head
          title={headTitle}
          description={headDescription}
          url={headUrl}
          type="website"
          image={`${baseUrl}assets/${urlTitle}-social.jpg`}
          height="500"
          width="500"
          schema={schema}
        />
      </Suspense>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Error>
          <Container>
            <UnitsContainer>
              <UnitList />
              <UnitActivities />
            </UnitsContainer>
          </Container>
        </Error>
        <Suspense fallback={<div />}>
          <InformationDisplay />
        </Suspense>
      </ThemeProvider>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>

    </>
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
