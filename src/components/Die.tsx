interface DieProps {
  value: number;
  isHeld: boolean;
  holdDie: any;
}

export default function Die(props: DieProps) {
  const styles = {
    backgroundColor: props.isHeld ? '#59E391' : 'white',
  };

  return (
    <div className='die--face' style={styles} onClick={props.holdDie}>
      <h2 className='die--number'>{props.value}</h2>
    </div>
  );
}
