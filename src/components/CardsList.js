import React from 'react';
import _ from 'lodash';
import Card from './Card';

const CardsList = (props) => {
  const cardsList = [];

  for (let i = 0; i < props.amount; i++) {
    cardsList.push(<Card key={_.uniqueId('pokemon_')} id={_.random(1, 256)} />);
  }

  return <div className="cardsList">{cardsList}</div>;
};

export default CardsList;
