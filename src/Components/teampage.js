import { Link } from 'react-router-dom';

export default function Team(event) {
  console.log(event);

  return (
    <>
      <Link to={{ pathname: '/' }}>
        <h3>Back</h3>
      </Link>
      <h1> this is a teampage</h1>
    </>
  );
}
