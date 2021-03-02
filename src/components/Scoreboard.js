import React from 'react';

const Scoreboard = (props) => {
  return (
    <div>
      <h1>SCOREBOARD</h1>
      <h3>Points in this run: {props.score}</h3>
      <h3>Personal record: {props.maxScore}</h3>
    </div>
  );
};

export default Scoreboard;
