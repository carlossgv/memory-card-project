import { useState } from 'react';
import './App.css';
import CardsList from './components/CardsList';
import Footer from './components/Footer';
import Scoreboard from './components/Scoreboard';
import appBackground from './static/img/appBackground.jpg';

function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const handleGame = (id) => {
    let newClickedCards = [...clickedCards];
    if (typeof id === 'string') {
      if (newClickedCards.includes(id)) {
        setClickedCards([]);
        alert(
          `Game Finished! Points in this run: ${score}. Personal record: ${maxScore}`
        );
        setScore(0);
      } else {
        newClickedCards.push(id);
        setClickedCards(newClickedCards);
        setScore(score + 1);
        console.log(score);

        if (score >= maxScore) {
          setMaxScore(score + 1);
        }
      }
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${appBackground})` }}>
      <Scoreboard score={score} maxScore={maxScore} />
      <CardsList amount="6" handleClick={handleGame} />
      <Footer />
    </div>
  );
}

export default App;
