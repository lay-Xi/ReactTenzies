import { useState } from 'react';
import Die from './components/Die';

export default function App() {
  const allNewDice = () => {
    let randomNumbers = [];

    for (let i = 0; i < 10; i++) {
      randomNumbers.push(Math.floor(Math.random() * 5 + 1));
    }

    return randomNumbers;
  };

  const [dices, setDices] = useState(allNewDice());

  const rollDice = () => {
    setDices(allNewDice());
  }

  let diceCount = 0;

  return (
    <main>
      <div className='dice--container'>
        {dices.map((diceValue: number) => {
          diceCount++;
          return <Die key={diceCount} value={diceValue} />;
        })}
      </div>
      <button className='roll-dice' onClick={rollDice}>Roll</button>
    </main>
  );
}
