// Package dependencies
import loadable from '@loadable/component';
import React, { useState, useEffect } from 'react';

import { Document, Page } from 'react-pdf/dist/entry.webpack';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import AnnotationLayer from 'react-pdf/dist/Page/AnnotationLayer.css';

// Component dependencies
import Navbar from 'Navbar';
import bookInfo from 'Data/bookInfo.json';
import ReactGA from 'react-ga';

const ScreenButton = loadable(() => import('./ScreenButton'));
const Progress = loadable(() => import('./Progress'));
const ContinueReading = loadable(() => import('./ContinueReading'));
const Head = loadable(() => import('Head'));


// Component for displaying a pdf page
export default function PDFPage() {
  const [page, setPage] = useState(1);
  const [initialPage, setInitialPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [display, setDisplay] = useState(true);
  const [scale, setScale] = useState(1);
  const [full, setFull] = useState(false);
  const [fullCap, setFullCap] = useState(false);
  const [perLoaded, setPerLoaded] = useState(0.00);
  const [progDisplay, setProgDisplay] = useState(true);
  const [browser, setBrowser] = useState(false);
  const book = window.location.search.slice(1);
  const file = `/assets/${book}.pdf`;
  const { title, subtitle, description } = bookInfo[book];

  function handleResize() {
    const { innerWidth } = window;
    let navbarLoss;
    if (full) {
      navbarLoss = 0;
    } else if (innerWidth > 700) {
      navbarLoss = 74;
    } else {
      navbarLoss = 64;
    }
    if (window.innerWidth / (window.innerHeight - navbarLoss) <= 960 / (540)) {
      setScale(window.innerWidth / 960);
    } else {
      setScale((window.innerHeight - navbarLoss) / (540));
    }
  }


  function onFullScreenChange() {
    if (
      !document.isFullScreen
      && !document.fullscreenElement
      && !document.webkitFullscreenElement
      && !document.mozFullScreenElement
      && !document.msFullscreenElement
    ) {
      setFull(false);
    } else {
      setFull(true);
    }
  }

  useEffect(() => {
    const elem = document.getElementById('fullscreen');
    if (
      elem.requestFullscreen
      || elem.mozRequestFullScreen
      || elem.webkitRequestFullScreen
      || elem.msRequestFullScreen
    ) {
      setFullCap(true);
    }

    window.addEventListener('resize', handleResize);
    if (elem.requestFullscreen) {
      document.addEventListener('fullscreenchange', onFullScreenChange);
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      document.addEventListener('mozfullscreenchange', onFullScreenChange);
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      document.addEventListener('webkitfullscreenchange', onFullScreenChange);
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      document.addEventListener('msfullscreenchange', onFullScreenChange);
    }
    document.addEventListener('fullscreenchange', onFullScreenChange);
    return () => {
      localStorage.setItem(book, page);


      window.removeEventListener('resize', handleResize);
      if (elem.requestFullscreen) {
        document.removeEventListener('fullscreenchange', onFullScreenChange);
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        document.removeEventListener('mozfullscreenchange', onFullScreenChange);
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        document.removeEventListener('webkitfullscreenchange', onFullScreenChange);
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        document.removeEventListener('msfullscreenchange', onFullScreenChange);
      }
    };
  });

  useEffect(() => {
    handleResize();
  }, [full]);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
    const initial = localStorage.getItem(book) ? parseInt(localStorage.getItem(book), 10) : 1;
    setInitialPage(initial);
    const elem = document.getElementById('fullscreen');
    if (
      !elem.requestFullscreen
      && !elem.mozRequestFullScreen
      && !elem.webkitRequestFullScreen
      && !elem.msRequestFullScreen) {
      setBrowser(true);
    }
  }, []);

  useEffect(() => {
    ReactGA.event({ category: book, action: page.toString() });
  }, [page]);

  function onDocumentLoadSuccess() {
    setPage(initialPage);
    setLastPage(initialPage);
    setProgDisplay(false);
    handleResize();
  }

  function onDocumentLoadProgress({ loaded }, setProgress) {
    const num = 1 - Math.exp(-loaded / 3000000);
    const newNum = (100 * num).toFixed(0);
    setProgress(newNum);
  }

  function onItemClick(e) {
    setDisplay(false);
    setPage(e.pageNumber);
  }

  function pageRender() {
    setLastPage(page);
    if (!display) {
      setDisplay(1);
    }
  }

  function fullscreenClick() {
    const elem = document.getElementById('fullscreen');
    if (!full) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }


  return (
    <>
      <Head title={`${title}: ${subtitle}`} description={description} />
      <Navbar />
      <Container id="fullscreen">
        <ContinueReading
          initialPage={initialPage}
          setInitialPage={setInitialPage}
          setPage={setPage}
          setLastPage={setLastPage}
        />
        <Progress perLoaded={perLoaded} progDisplay={progDisplay} />
        <StyledDoc
          file={file}
          loading={null}
          error="Book not found :("
          onLoadProgress={({ loaded }) => onDocumentLoadProgress({ loaded }, setPerLoaded)}
          onLoadSuccess={onDocumentLoadSuccess}
          onItemClick={onItemClick}
          options={{ disableAutoFetch: false, disableStream: false }}
        >
          <MainPage
            display={display}
            pageNumber={page}
            scale={scale}
            renderTextLayer={false}
            onRenderSuccess={pageRender}
          >
            <ScreenButton
              fullCap={fullCap}
              full={full}
              fullscreenClick={fullscreenClick}
            />
            <BrowserWarning browser={browser} onClick={() => (setBrowser(false))}>
          Please note our stories may not run properly on this browser.  Use Chrome, Safari, Firefox, or Edge for the best experience.  Click to remove this message.
            </BrowserWarning>
          </MainPage>
          <LastPage display={display} pageNumber={lastPage} scale={scale} renderTextLayer={false}>
            <Loading>Loading...</Loading>
            <ScreenButton
              fullCap={fullCap}
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

const BrowserWarning = styled.main`
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 14px;
  color: red;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  width: 300px;
  padding: 5px;
  cursor: pointer;
  display: ${(props) => (props.browser ? 'block' : 'none')};
`;

const StyledDoc = styled(Document)`
  display: flex;
  justify-content: center;
  height: 70%;
`;

const MainPage = styled(Page)`
  display: ${(props) => (props.display ? 'block' : 'none')};
`;

const LastPage = styled(Page)`
  display: ${(props) => (props.display ? 'none' : 'block')};
`;

const Loading = styled.div`
  font-size: 25px;
  background-color: white;
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  padding: 5px;
  display: none;

  :hover{
    cursor: pointer;
  }
`;
