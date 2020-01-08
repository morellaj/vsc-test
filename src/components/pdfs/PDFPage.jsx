// Package dependencies
import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import styled from 'styled-components';
import Fullscreen from 'react-full-screen';
// eslint-disable-next-line no-unused-vars
import AnnotationLayer from 'react-pdf/dist/Page/AnnotationLayer.css';

// Component dependencies
import Navbar from '../common/Navbar';
import ScreenButton from './ScreenButton';
import { colors } from '../../colors.json';

// Component for displaying a pdf page
export default function PDFPage() {
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [display, setDisplay] = useState(true);
  const [scale, setScale] = useState(1);
  const [full, setFull] = useState(false);
  const [perLoaded, setPerLoaded] = useState(0.00);
  const [progDisplay, setProgDisplay] = useState(true);
  const file = `/assets/${window.location.search.slice(1)}.pdf`;

  function handleResize() {
    if (window.innerWidth / window.innerHeight <= 16 / 9) {
      setScale(window.innerWidth / 960);
    } else {
      setScale(window.innerHeight / 540);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  function onDocumentLoadSuccess() {
    setPage(1);
    setLastPage(1);
    setProgDisplay(false);
    handleResize();
  }

  function onDocumentLoadProgress({ loaded }, setProgress) {
    const num = 1 - Math.exp(-loaded / 3000000);
    const newNum = (5 * num).toFixed(2);
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


  return (
    <Fullscreen enabled={full} onChange={() => setFull(full)}>
      <InvisNavbar full={full}>
        <Navbar />
      </InvisNavbar>
      <ProgressContainer display={progDisplay}>
        <Progress>
          {`${perLoaded} / 5MB Loaded...`}
        </Progress>
      </ProgressContainer>
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
          <ScreenButton full={full} setFull={setFull} />
        </MainPage>
        <LastPage display={display} pageNumber={lastPage} scale={scale} renderTextLayer={false}>
          <Loading>Loading...</Loading>
          <ScreenButton full={full} setFull={setFull} />
        </LastPage>
      </StyledDoc>
    </Fullscreen>
  );
}

// Styling
const StyledDoc = styled(Document)`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-bottom: 20px;
`;

const MainPage = styled(Page)`
  display: ${(props) => (props.display ? 'block' : 'none')};
`;

const LastPage = styled(Page)`
  display: ${(props) => (props.display ? 'none' : 'block')}
`;

const InvisNavbar = styled.div`
  display: ${(props) => (props.full ? 'none' : 'block')};
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

  :hover{
    cursor: pointer;
  }
`;

const ProgressContainer = styled.div`
  display: ${(props) => (props.display ? 'block' : 'none')};
  display: flex;
  position: absolute;
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;
`;

const Progress = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: white;
  background-color: ${colors.LITS.color};
  font-size: 40px;
  font-weight: 900;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 20px black;
`;
