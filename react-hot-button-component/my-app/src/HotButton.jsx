import { useState } from 'react';

const defaultStyle = {
  fontWeight: 'bold',
  padding: '1rem',
  border: '1px solid black',
  boxShadow: '5px 5px 3px black',
};

export default function HotButton() {
  const [count, setCount] = useState(0);
  const [colors, setColors] = useState({
    backgroundColor: '#351C75',
    color: 'white',
  });

  function handleClick() {
    if (count < 3) {
      setColors({ backgroundColor: '#351C75', color: 'white' });
    } else if (count < 6) {
      setColors({ backgroundColor: '#674EA7', color: 'white' });
    } else if (count < 9) {
      setColors({ backgroundColor: '#E06666', color: 'white' });
    } else if (count < 12) {
      setColors({ backgroundColor: '#F6B26B', color: 'black' });
    } else if (count < 15) {
      setColors({ backgroundColor: '#FFFF00', color: 'black' });
    } else if (count < 18) {
      setColors({ backgroundColor: '#FFFFFF', color: 'black' });
    }
    setCount(count + 1);
  }

  const hotButtonStyle = {
    ...defaultStyle,
    backgroundColor: colors.backgroundColor,
    color: colors.color,
  };

  return (
    <button onClick={handleClick} style={hotButtonStyle}>
      Hot Button
    </button>
  );
}
