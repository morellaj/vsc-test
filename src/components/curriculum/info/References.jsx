// Package dependencies
import React, { useContext } from 'react';
import styled from 'styled-components';

// Data dependencies
import CharacterContext from '../CharacterContext';
import unitDetails from 'Data/unitDetails.json';

// Component
export default function References() {
  const { unitSelected } = useContext(CharacterContext);
  const { references } = unitDetails[unitSelected];

  let i = 0;
  const referencesDisplay = references.map((info) => {
    i += 1;
    return (
      <Text>
        <a href={info.link} target="_blank" rel="noreferrer noopener" key={i}>{info.title}</a>
      </Text>
    );
  });
  return (
    <>
      <Title>References</Title>
      <Section>
        <TextContainer>
          The resources below were used to create the materials for this topic and can provide additional information:
          <Links>
            {referencesDisplay}
          </Links>
        </TextContainer>
      </Section>
    </>
  );
}


// Styling
const Title = styled.h1`
  margin: 10px;
  font-size: 25px;
  border-bottom: 1px solid ${(props) => props.theme.color};

  @media(max-width: 750px) {
    font-size: 20px;
  };
`;

const Text = styled.li`
  margin-bottom: 10px;
  color: black;
`;

const Links = styled.ul`
  margin: 10px 0 0 0;
  list-style: none;
  padding-left: 10px;
  font-size: 12px;
`;

const TextContainer = styled.div`

@media(max-width: 750px) {
    font-size: 14px;
  };
`;

const Section = styled.section`
  margin: 0 10px 20px 10px;
`;
