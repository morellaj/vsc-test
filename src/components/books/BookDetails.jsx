// Package dependencies
import React from 'react';
import styled from 'styled-components';
import BookImage from './BookImage';


// Component for displaying extra details of a book
export default function BookDetails(props) {
  const book = props.book;
  let title;
  let primaryText = [];
  
  if(book){
    title = book.subtitle?<Title>{book.title + ': '}<SubTitle>{book.subtitle}</SubTitle></Title>:<Title>{book.title}</Title>
    if(book.primary.length > 1 || book.primary[0] != props.section){
      primaryText.push(<div>{'This book is one of our favorites for these units: '}</div>)
      primaryText.push(<Divider>|</Divider>)
      book.primary.forEach(unit => {
        primaryText.push(<div>{' ' + unit + ': ' + 'text' + ' '}</div>)
        primaryText.push(<Divider>|</Divider>)
      })
    }
  }

  return (
    <Container book={props.book} onClick={()=>props.setMoreInfo()}>
      {
        book && <InfoContainer onClick={(e)=>e.stopPropagation()}>
        <div>
          {title}
        </div>
        <LowerContainer>
          <LowerLeftContainer>
            <BookImage book={book}/>
            <Text>{'By ' + book.authors}</Text>
          </LowerLeftContainer>
          <LowerRightContainer>
            <div>
              {
                book.pages && <Text>{book.pages + ' pages'}</Text>
              }
              <Text>{book.description}</Text>
            </div>
            <LinksContainer>
              {book.previewLink && <Text as="a" href={book.previewLink} target='_blank'>
                <img src='./assets/google-preview-logo.png'/>
              </Text>}
              {book.infoLink && <a href={book.infoLink} target='_blank'>Get more information from Google Books</a>}
            </LinksContainer>
          </LowerRightContainer>
        </LowerContainer>
      </InfoContainer>}
    </Container>
  )
}


// Styling
const Container = styled.div`
  display: ${props => props.book?'flex':'none'};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .65);
  font-size: 20px;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 20px;
  max-width: 80%;
  background-color: white;
`

const Title = styled.div`
  margin: 20px 20px 10px 20px;
  padding-bottom: 10px;
  border-bottom: 3px solid lightgray;
  font-size: 35px;
  font-weight: 600;
`

const SubTitle = styled.span`
  font-size: 30px;
  font-weight: 400;
`

const LowerContainer = styled.div`
  display: flex;
  margin: 0 20px 10px 20px;
`

const LowerLeftContainer = styled.div`
  color: black;
`

const LowerRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`

const Text = styled.div`
  margin-bottom: 15px;

  :empty{
    display: none;
  }
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const RecommendationsContainer = styled.div`
  margin: 0 20px 0 20px;
  padding-top: 10px;
  border-top: 3px solid lightgray;
`

const Recommendation = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 15px;
`

const Divider = styled.div`
  margin: 0 3px;
  padding-bottom: 3px;
  color: lightgray;
  font-weight: 900;
`