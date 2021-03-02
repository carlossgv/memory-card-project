import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import Card from './Card';

const CardsList = (props) => {
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    const getNewCards = (e) => {
      if (e) {
        props.handleClick(e.target.parentElement.id);
      }

      let newCardsList = [];
      for (let i = 0; i < props.amount; i++) {
        newCardsList.push(
          <Card
            handleClick={getNewCards}
            key={_.uniqueId('pokemon_')}
            id={_.random(1, 25)}
          />
        );
      }

      setCardsList(newCardsList);
    };

    getNewCards();
  }, [props]);

  return (
    <div className="cardsList" onClick={props.handleClick}>
      {cardsList}
    </div>
  );
};

export default CardsList;
