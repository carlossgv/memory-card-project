import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import './Card.css';

const Card = (props) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      const res = await axios(`https://pokeapi.co/api/v2/pokemon/${props.id}/`);
      setPokemon(res.data);
    };

    fetchInfo();
  }, [props.id]);

  return (
    <div
      className="card"
      style={{ backgroundImage: 'url(/static/img/card-background.jpg)' }}
    >
      <img
        src={
          pokemon?.sprites.front_default ||
          './static/img/Original_loading_screen.png'
        }
        alt={pokemon?.name || 'Loading'}
        width="300px"
        height="300px"
      ></img>
      <div>
        <h3>{_.upperCase(pokemon?.name) || 'Loading'}</h3>
      </div>
    </div>
  );
};

export default Card;
