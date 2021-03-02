import React from 'react';
import './Scoreboard.css';

const Scoreboard = (props) => {
  return (
    <div className="scoreBoard">
      <div className="title">
        <img
          height="80px"
          alt="Pokemon Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png"
        ></img>{' '}
        <h1>Memory Game!</h1>
      </div>
      <h3>Points in this run: {props.score}</h3>
      <h3>Personal record: {props.maxScore}</h3>
      <p>
        <strong>How to play:</strong> Select a card a remember it! As long as
        you keep selecting non-repeating cards you'll score points.
      </p>
    </div>
  );
};

export default Scoreboard;
