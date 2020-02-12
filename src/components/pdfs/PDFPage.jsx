// Package dependencies
// import loadable from '@loadable/component';
import React, {
  useState, useEffect,
} from 'react';

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
  const [height, setHeight] = useState(1000);
  const [pageCount, setPageCount] = useState(0);
  const [mobile, setMobile] = useState(true);
  const book = window.location.search.slice(1).split('&')[0];
  const file = `/assets/${book}.pdf`;
  const { title, subtitle, description } = bookInfo[book] || {};

  function handleResize() {
    const { innerWidth, innerHeight } = window;
    setHeight(innerHeight);
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
    ReactGA.event({ category: 'book', action: '1', label: book });

    if (window.screen.width < 400) {
      setMobile(true);
    }


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
    setPageCount(pageCount + 1);
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
      <Head
        title={`${title}: ${subtitle}`}
        description={description}
        url={`https://learningisthesolution.com/book?${book}`}
        type="book"
        author="Alex Morelli and Emily Moeller"
        tags={['kids', 'character development', 'character', 'early reader']}
        image={`https://learningisthesolution.com/assets/${book}-social.jpg`}
        height="338px"
        width="600px"
      />
      <NavbarContainer height={height}>
        <Navbar />
      </NavbarContainer>
      <Container id="fullscreen">
        <ContinueReading
          initialPage={initialPage}
          setInitialPage={setInitialPage}
          setPage={setPage}
          setLastPage={setLastPage}
          scale={scale}
        />
        <Progress perLoaded={perLoaded} progDisplay={progDisplay} />
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
            <BrowserWarning mobile={mobile} onClick={() => (setMobile(false))}>
              Best viewed on PC or tablet.  Tap to close.
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
  display: ${(props) => (props.mobile ? 'none' : 'none')};
`;

const StyledDoc = styled(Document)`
  display: flex;
  justify-content: center;
  height: 70%;
  overflow:hidden;
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

const NavbarContainer = styled.div`
  display: ${(props) => (props.height < 500 ? 'none' : 'flex')};
`;

/*    setPageCount(pageCount + 1);
    if (pageCount === 1) {
      ReactGA.event({ category: 'book', action: '1', label: { book } });
    }
    if (pageCount === 5) {
      ReactGA.event({ category: 'book', action: '5', label: { book } });
    }
    if (pageCount === 40) {
      ReactGA.event({ category: 'book', action: '40', label: { book } });
    }
    if (pageCount === 100) {
      ReactGA.event({ category: 'book', action: '80', label: { book } });
    }
    */
