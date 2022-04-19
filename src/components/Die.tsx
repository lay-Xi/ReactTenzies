interface DieProps {
  value: number;
}

export default function Die(props: DieProps) {
  return (
    <div className='die--face'>
      <h2 className='die--number'>{props.value}</h2>
    </div>
  );
}
