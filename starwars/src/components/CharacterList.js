import React from 'react';
import Character from './Character';
import { Card } from 'react-bootstrap';
import './StarWars.css';

const CharacterList = props => {
  return props.starwarsChars.map(char => {
    return (
      <Card className="card" key={char.created} style={{ width: '18rem' }}>
        <Character Character={char} />
      </Card>
    );
  });
};

export default CharacterList;
