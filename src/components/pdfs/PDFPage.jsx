// Package dependencies
import loadable from '@loadable/component';
import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import styled from 'styled-components';
import Fullscreen from 'react-full-screen';
import AnnotationLayer from 'react-pdf/dist/Page/AnnotationLayer.css';

// Component dependencies
const ScreenButton = loadable(() => import('./ScreenButton'));
const Progress = loadable(() => import('./Progress'));

// Component for displaying a pdf page
export default function PDFPage() {
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [display, setDisplay] = useState(true);
  const [scale, setScale] = useState(1);
  const [full, setFull] = useState(false);
  const [screenActual, setScreenActual] = useState(false);
  const [perLoaded, setPerLoaded] = useState(0.00);
  const [progDisplay, setProgDisplay] = useState(true);
  const file = `/assets/${window.location.search.slice(1)}.pdf`;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

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

  function onFullScreenChange() {
    setScreenActual(!screenActual);
    setFull(!screenActual);
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
    <StyledFullscreen enabled={full} onChange={onFullScreenChange}>
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
          <ScreenButton full={full} setFull={setFull} />
        </MainPage>
        <LastPage display={display} pageNumber={lastPage} scale={scale} renderTextLayer={false}>
          <Loading>Loading...</Loading>
          <ScreenButton full={full} setFull={setFull} />
        </LastPage>
      </StyledDoc>
    </StyledFullscreen>
  );
}

// Styling
const StyledFullscreen = styled(Fullscreen)`
  margin-top: 20px;
`;

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

  :hover{
    cursor: pointer;
  }
`;
