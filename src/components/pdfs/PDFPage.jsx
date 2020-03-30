// Package dependencies
import React, { useState, useEffect, useRef } from 'react';
import { baseUrl } from 'Constants';

import { Document, Page } from 'react-pdf/dist/entry.webpack';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import AnnotationLayer from 'react-pdf/dist/Page/AnnotationLayer.css';

// Component dependencies
import Navbar from 'Navbar';
import bookInfo from 'Data/bookInfo.json';
import ReactGA from 'react-ga';
import Head from 'Head';
import ScreenButton from './ScreenButton';
import Progress from './Progress';
import ContinueReading from './ContinueReading';

const browserList = {
  'chrome': {
    request: 'requestFullscreen',
    event: 'fullscreenchange',
    exit: 'exitFullscreen',
    full: 'fullscreenElement'
  },
  'moz': {
    request: 'mozRequestFullScreen',
    event: 'mozfullscreenchange',
    exit: 'mozCancelFullScreen',
    full: 'mozFullScreenElement'
  },
  'webkit': {
    request: 'webkitRequestFullScreen',
    event: 'webkitfullscreenchange',
    exit: 'webkitExitFullscreen',
    full: 'webkitFullscreenElement'
  },
  'msRequestFullScreen': {
    request: 'msRequestFullScreen',
    event: 'msfullscreenchange',
    exit: 'msExitFullscreen',
    full: 'msFullscreenElement'
  }
};

// Component for displaying a pdf page
export default function PDFPage() {
  const [page, setPage] = useState(1);
  const [initialPage, setInitialPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [show, setShow] = useState(true);
  const [scale, setScale] = useState(1);
  const [full, setFull] = useState(false);
  const [perLoaded, setPerLoaded] = useState(0.00);
  const [mobile, setMobile] = useState(false);
  const browserRef = useRef(null);
  const fullscreenRef = useRef(null);
  const progressRef = useRef(null);
  const navbarRef = useRef(null);
  const book = window.location.search.slice(1).split('&')[0].split('=')[0];
  const file = `/assets/${book}.pdf`;
  const { title, subtitle, description } = bookInfo[book] || {};

  function handleResize() {
    const { innerWidth, innerHeight } = window;
    navbarRef.current.style.display = innerHeight < 500 ? 'none' : 'flex';
    let navbarLoss;
    if (full || innerHeight < 500) {
      navbarLoss = 0;
    } else if (innerWidth > 600) {
      navbarLoss = 54;
    } else {
      navbarLoss = 39;
    }
    if (window.innerWidth / (window.innerHeight - navbarLoss) <= 960 / (540)) {
      setScale(window.innerWidth / 960);
    } else {
      setScale((window.innerHeight - navbarLoss) / (540));
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.event({ category: 'book', action: '1', label: book });

    progressRef.current = document.getElementById('progress');

    const keys = Object.keys(browserList);
    for (let i = 0; i < keys.length; i += 1) {
      if (fullscreenRef.current[browserList[keys[i]].request]) {
        browserRef.current = keys[i];
      }
    }

    function onFullScreenChange() {
      if (!document[browserList[browserRef.current].full]) {
        setFull(false);
      } else {
        setFull(true);
      }
    }

    const initial = localStorage.getItem(book) ? parseInt(localStorage.getItem(book)) : 1;
    const browserWarn = localStorage.getItem('browserWarn') ? localStorage.getItem('browserWarn') : false;
    setInitialPage(initial);

    if ((window.screen.width < 400 || window.screen.height < 400) && browserWarn !== 'true') {
      setMobile(true);
    }

    window.addEventListener('resize', handleResize);
    document.addEventListener(browserList[browserRef.current].event, onFullScreenChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener(browserList[browserRef.current].event, onFullScreenChange);
    };
  }, []);

  useEffect(() => {
    handleResize();
  }, [full]);

  useEffect(() => {
    localStorage.setItem(book, page);
    if (page === 5) {
      ReactGA.event({ category: 'book', action: '5', label: book });
    } else if (page === 40) {
      ReactGA.event({ category: 'book', action: '40', label: book });
    } else if (page === 80) {
      ReactGA.event({ category: 'book', action: '80', label: book });
    }
  }, [page]);

  function onDocumentLoadSuccess() {
    setPage(initialPage);
    setLastPage(initialPage);
    progressRef.current.style.display = true;
    handleResize();
  }

  function onDocumentLoadProgress({ loaded }, setProgress) {
    const num = 1 - Math.exp(-loaded / 3000000);
    const newNum = (100 * num).toFixed(0);
    setProgress(newNum);
  }

  function onItemClick(e) {
    setShow(false);
    setPage(e.pageNumber);
  }

  function pageRender() {
    setLastPage(page);
    if (!show) {
      setShow(true);
    }
  }

  function fullscreenClick() {
    if (!full) {
      fullscreenRef.current[browserList[browserRef.current].request]();
    } else {
      document[browserList[browserRef.current].exit]();
    }
  }

  function handleBrowserClick() {
    localStorage.setItem('browserWarn', true);
    setMobile(false);
  }

  const url = `${baseUrl}book?${book}`;

  const schema = [
    {
      "@type": ["Webpage", "ItemPage"],
      "@id": `${url}/#webpage`,
      "url": url,
      "name": `${title}: ${subtitle}`,
      "isPartOf": {
        "@id": "https://learningisthesolution.com/#website"
      },
      "inLanguage": "en-US",
      "about": {
        "@id": "https://learningisthesolution.com/#organization"
      },
      "description": description
    }
  ];

  return (
    <>
      <Head
        title={`${title}: ${subtitle}`}
        description={description}
        url={url}
        type="book"
        author="Alex Morelli and Emily Morelli"
        tags={['kids', 'character development', 'character', 'early reader']}
        image={`${baseUrl}assets/${book}-social.jpg`}
        height="338"
        width="600"
        schema={schema}
      />
      <NavbarContainer ref={navbarRef}>
        <Navbar />
      </NavbarContainer>
      <Container id="fullscreen" ref={fullscreenRef}>
        <ContinueReading
          initialPage={initialPage}
          setInitialPage={setInitialPage}
          setPage={setPage}
          setLastPage={setLastPage}
          scale={scale}
        />
        <Progress perLoaded={perLoaded} />
        <WarningContainer mobile={mobile} onClick={handleBrowserClick}>
          <BrowserWarning>
            <div>Best viewed on PC or tablet</div>
            <div>(Tap to close)</div>
          </BrowserWarning>
        </WarningContainer>
        <StyledDoc
          file={file}
          loading={null}
          error={`Hmm it doesn't look like we have a book called ${book}...  `}
          onLoadProgress={({ loaded }) => onDocumentLoadProgress({ loaded }, setPerLoaded)}
          onLoadSuccess={onDocumentLoadSuccess}
          onItemClick={onItemClick}
          options={{ disableAutoFetch: false, disableStream: false }}
        >
          <MainPage
            show={show}
            pageNumber={page}
            scale={scale}
            renderTextLayer={false}
            onRenderSuccess={pageRender}
          >
            <ScreenButton
              browserRef={browserRef}
              full={full}
              fullscreenClick={fullscreenClick}
            />
          </MainPage>
          <LastPage
            show={show}
            pageNumber={lastPage}
            scale={scale}
            renderTextLayer={false}
          >
            <ScreenButton
              browserRef={browserRef}
              full={full}
              fullscreenClick={fullscreenClick}
            />
          </LastPage>
        </StyledDoc>
      </Container>
    </>
  );
}

// Styling
const Container = styled.main`

`;

const WarningContainer = styled.div`
  position: absolute;
  top: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  z-index: 100;
  display: ${(props) => (props.mobile ? 'flex' : 'none')};
`;

const BrowserWarning = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  font-size: 14px;
  ;
  background-color: white;
  padding: 20px 30px;
  box-shadow: 0 1px 2.5px rgba(0,0,0,0.5);
`;

const StyledDoc = styled(Document)`
  display: flex;
  justify-content: center;
  overflow:hidden;
`;

const MainPage = styled(Page)`
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const LastPage = styled(Page)`
  display: ${(props) => (props.show ? 'none' : 'block')};
`;

const NavbarContainer = styled.div`
  display: flex;
`;
