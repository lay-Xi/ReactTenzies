import Die from './components/Die';

export default function App() {

  const allNewDice: Function = () => {
    let randomNumbers = [];

    for (let i = 0; i < 10; i++) {
      randomNumbers.push(Math.floor((Math.random() * 5) + 1));
    }
    
    return randomNumbers;
  }

  return (
    <main>
      <div className='dice--container'>
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
        <Die value={5} />
        <Die value={6} />
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
      </div>
    </main>
  );
}
