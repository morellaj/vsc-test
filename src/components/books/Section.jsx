// Package dependencies
import React, {useState, useEffect, Fragment} from 'react';
import styled from 'styled-components';
import https from 'https';


// Component dependencies
import Book from './Book';

// Data files
import {colors} from '../../master.json';


// Component for displaying a section of the book page
export default function Section(props) {
  return (
    <Container>
      <SectionHeader>{props.section}</SectionHeader>
      <BooksContainer>
        {props.bookList}
      </BooksContainer>
    </Container>
  );
}


// Styling
const Container = styled.div`
  padding: 20px 20px 0 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  max-width: 1100px;
  background-color: white;
`

const BooksContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
`

const SectionHeader = styled.h1`
  margin: 0;
  border-bottom: 1px solid ${colors.LITS.color};
`