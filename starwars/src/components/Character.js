import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Character = props => {
  const { name, birth_year, height, films } = props.Character;

  return (
    <ListGroup>
      <ListGroup.Item>Name: {name}</ListGroup.Item>
      <ListGroup.Item>Birth Year: {birth_year}</ListGroup.Item>
      <ListGroup.Item>Height: {height}</ListGroup.Item>
      <ListGroup.Item>Number of films: {films.length}</ListGroup.Item>
    </ListGroup>
  );
};

export default Character;
