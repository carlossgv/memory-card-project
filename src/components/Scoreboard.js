import React from 'react';
import './Scoreboard.css';
import pokemonLogo from '../static/img/pokemonLogo.png';

const Scoreboard = (props) => {
  return (
    <div className="scoreBoard">
      <div className="title">
        <img height="80px" alt="Pokemon Logo" src={pokemonLogo}></img>{' '}
        <h1>Memory Game!</h1>
      </div>
      <h3>Points in this run: {props.score}</h3>
      <h3>Personal record: {props.maxScore}</h3>
      <p>
        <strong>How to play:</strong> Select a card and remember it! As long as
        you keep selecting non-repeating cards you'll score points.
      </p>
    </div>
  );
};

export default Scoreboard;
