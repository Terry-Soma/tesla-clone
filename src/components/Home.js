import React from 'react';
import styled from 'styled-components';
import Section from './Section';
export default function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        desc="Order online for Lorem, ipsum dolor."
        img="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model S"
        desc="Order online for Lorem, ipsum dolor."
        img="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model S"
        desc="Order online for Lorem, ipsum dolor."
        img="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model S"
        desc="Order online for Lorem, ipsum dolor."
        img="solar-roof.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model S"
        desc="Order online for Lorem, ipsum dolor."
        img="accessories.jpg"
        leftBtnText="Custom Order"
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
