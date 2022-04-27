interface DieProps {
  value: number;
  isHeld: boolean
}

export default function Die(props: DieProps) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }

  return (
    <div className='die--face' style={styles}>
      <h2 className='die--number'>{props.value}</h2>
    </div>
  );
}
