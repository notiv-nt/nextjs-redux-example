import { useSelector, useDispatch } from 'react-redux';

import { setName, setNameAsync } from '../store/actions';

const Index = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const state = useSelector((state) => state);

  return (
    <>
      <h1>{name}</h1>

      <button onClick={() => dispatch(setName('mike'))}>Set name to mike</button>
      <button onClick={() => dispatch(setNameAsync('johny'))}>Async set name to johny</button>

      <pre>
        <code>{JSON.stringify(state, null, 4)}</code>
      </pre>

      <style jsx>{`
        pre {
          background: #ebebeb;
          width: 400;
          padding: 10;
          border: 1px solid grey;
          margin-bottom: 10;
        }
      `}</style>
    </>
  );
};

export default Index;
