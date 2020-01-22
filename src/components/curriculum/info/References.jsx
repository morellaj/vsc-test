// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component dependencies
import character from 'Data/character.json';

/** ************************************ */
// Component for the description of activities
/** ******************************** */
export default function References(props) {
  const { unit } = props;
  const { references } = character[unit];

  const referencesDisplay = references.map((info) => <Text><a href={info} target="_blank" rel="noreferrer noopener">{info}</a></Text>);
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
const Title = styled.div`
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

const Section = styled.div`
  margin: 0 10px 20px 10px;
`;
