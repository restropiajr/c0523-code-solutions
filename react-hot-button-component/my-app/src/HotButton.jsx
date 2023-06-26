import { useState } from 'react';

const defaultStyle = {
  fontWeight: 'bold',
  padding: '1rem',
  border: '1px solid black',
  boxShadow: '5px 5px 3px black',
};

export default function HotButton() {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#351C75');
  const [color, setColor] = useState('white');

  function handleClick() {
    if (count < 3) {
      setBackgroundColor('#351C75');
    } else if (count < 6) {
      setBackgroundColor('#674EA7');
    } else if (count < 9) {
      setBackgroundColor('#E06666');
    } else if (count < 12) {
      setBackgroundColor('#F6B26B');
      setColor('black');
    } else if (count < 15) {
      setBackgroundColor('#FFFF00');
    } else if (count < 18) {
      setBackgroundColor('#FFFFFF');
    }
    setCount(count + 1);
  }

  const hotButtonStyle = {
    ...defaultStyle,
    backgroundColor: backgroundColor,
    color: color,
  };

  return (
    <button onClick={handleClick} style={hotButtonStyle}>
      Hot Button
    </button>
  );
}
