import React from 'react';

import { Container, Item, Title } from './styles';


export default function List({ title, elements }) {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((elements, index) => (
        <Item key={index}>{elements}</Item>
      ))}
    </Container>
  );
};
