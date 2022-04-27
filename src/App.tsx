import { useState } from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';

interface DiceObj {
  id: string,
  value: number,
  isHeld: boolean
}

export default function App() {
  const allNewDice = () => {
    let dices = [];

    for (let i = 0; i < 10; i++) {
      dices.push({
        id: nanoid(),
        value: Math.floor(Math.random() * 5 + 1),
        isHeld: false
      });
    }

    return dices;
  };

  const [dices, setDices] = useState(allNewDice());

  const rollDice = () => {
    setDices(allNewDice());
  }
  
  return (
    <main>
      <div className='dice--container'>
        {dices.map((dice: DiceObj) => {
          return <Die key={dice.id} value={dice.value} />;
        })}
      </div>
      <button className='roll-dice' onClick={rollDice}>Roll</button>
    </main>
  );
}
