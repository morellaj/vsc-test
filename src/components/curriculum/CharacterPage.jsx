// Package dependencies
import React, {
  useState, useEffect, lazy, Suspense,
} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ReactGA from 'react-ga';
import colors from 'Colors';
import character from 'Data/character.json';
import { characterUnitNumbers, baseUrl } from 'Constants';
import Navbar from 'Navbar';
import Error from 'Error';
import UnitArr from './UnitArr';
import UnitList from './unitList/UnitList';
import UnitActivities from './unitActivities/UnitActivities';


const Footer = lazy(() => import('Footer'));
const Head = lazy(() => import('Head'));
const InformationDisplay = lazy(() => import('./info/InformationDisplay'));

/** ********************************************* */
// Component for displaying the science page
/** ********************************************* */
export default function CharacterPage() {
  const [unitSelected, setUnitSelected] = useState(0);
  const [done, setDone] = useState(false);
  const [info, setInfo] = useState();
  const fullLocation = window.location.search.slice(1);
  const location = fullLocation.split('&')[0].split('=')[0];
  const url = window.location.href;
  const newUrl = url.replace(`?${fullLocation}`, '');
  const locationUnit = characterUnitNumbers.indexOf(location) !== -1
    ? characterUnitNumbers.indexOf(location) : unitSelected;
  if (!done) {
    setUnitSelected(locationUnit);
    setDone(true);
  }
  window.history.replaceState({ id: location }, 'Stuff', `${newUrl}?${location}`);

  const unitArr = UnitArr(character);
  const {
    title, subtitle, description, searchTitle, searchDescription,
  } = character[unitArr[unitSelected].unit];
  const colorTheme = unitArr.length ? colors[unitArr[unitSelected].unit.charAt(0)] : null;
  const theme = colorTheme ? {
    color: colorTheme.color,
    darkColor: colorTheme.darkColor,
    lightColor: colorTheme.lightColor,
    litsColor: colors.LITS.color,
  } : {};

  const unitName = unitArr[unitSelected].unit;

  const infoDisplay = info
    ? <Suspense fallback={<div />}><InformationDisplay info={info} setInfo={setInfo} unit={unitName} /></Suspense> : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    ReactGA.modalview(window.location.pathname + window.location.search);
  }, [unitSelected]);

  useEffect(() => {
    if (info) {
      ReactGA.event({ category: 'units', action: `clicked ${info.type}` });
    }
  }, [info]);

  useEffect(() => {
    window.history.replaceState({ id: characterUnitNumbers[unitSelected] }, 'Stuff', `${newUrl}?${characterUnitNumbers[unitSelected]}`);
  }, [unitSelected]);

  let headTitle = searchTitle;
  let headDescription = searchDescription;

  if (!done) {
    headTitle = '';
    headDescription = '';
  }

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

  return (
    <>
      <Suspense fallback={<div />}>
        <Head
          title={headTitle}
          description={headDescription}
          url={headUrl}
          type="website"
          image={`${baseUrl}assets/${characterUnitNumbers[unitSelected]}-social.jpg`}
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
              <UnitList
                unitList={unitArr}
                unitSelected={unitSelected}
                setUnitSelected={setUnitSelected}
              />
              <UnitActivities
                unit={character[unitName]}
                unitName={characterUnitNumbers[unitSelected]}
                setInfo={setInfo}
                title={title}
                subtitle={subtitle}
                description={description}
              />
            </UnitsContainer>
          </Container>
        </Error>
        {infoDisplay}
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

const UnitsContainer = styled.main`
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
