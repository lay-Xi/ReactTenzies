import { useState } from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';

interface DiceObj {
  id: string;
  value: number;
  isHeld: boolean;
}

export default function App() {
  const generateNewDie = () => {
    return {
      id: nanoid(),
      value: Math.floor(Math.random() * 5 + 1),
      isHeld: false,
    };
  };

  const allNewDice = () => {
    let dices = [];

    for (let i = 0; i < 10; i++) {
      dices.push(generateNewDie());
    }

    return dices;
  };

  const [dices, setDices] = useState(allNewDice());

  const rollDice = () => {
    setDices((prev) =>
      prev.map((die) => (die.isHeld ? die : generateNewDie()))
    );
  };

  const holdDice = (id: string) => {
    setDices((prev) =>
      prev.map((die) => (die.id === id ? { ...die, isHeld: !die.isHeld } : die))
    );
  };

  return (
    <main>
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className='dice--container'>
        {dices.map((dice: DiceObj) => {
          return (
            <Die
              key={dice.id}
              isHeld={dice.isHeld}
              value={dice.value}
              holdDie={() => holdDice(dice.id)}
            />
          );
        })}
      </div>
      <button className='roll-dice' onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
