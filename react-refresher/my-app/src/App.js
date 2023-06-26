import './App.css';
import UpAndDownButton from './UpAndDownButton';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function handleCustomClickCountUp() {
    setCount(count + 1);
  }

  function handleCustomClickCountDown() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <UpAndDownButton text="Down" onCustomClick={handleCustomClickCountDown} />
      <p>{count}</p>
      <UpAndDownButton text="Up" onCustomClick={handleCustomClickCountUp} />
    </div>
  );
}
