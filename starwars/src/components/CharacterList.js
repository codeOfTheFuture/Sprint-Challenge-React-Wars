import React from 'react';
import Character from './Character';

const CharacterList = props => {
  return props.starwarsChars.map(char => {
    return (
      <div>
        <Character Character={char} />
      </div>
    );
  });
};

export default CharacterList;
