import { useState } from 'react';

const defaultToggleSwitchStyle = {
  padding: '1rem',
  border: '2px solid black',
  borderRadius: '1rem',
};

const defaultToggleSwitchWrapperStyle = {
  width: '4rem',
  border: '2px solid black',
  borderRadius: '1.25rem',
  backgroundColor: 'white',
  display: 'flex',
  margin: '1rem',
};

export default function ToggleSwitch() {
  const [wrapperStyle, setWrapperStyle] = useState({
    backgroundColor: 'white',
    justifyContent: 'flex-start',
  });
  const [switchText, setSwitchText] = useState('OFF');

  function handleClick() {
    if (switchText === 'OFF') {
      setWrapperStyle({
        backgroundColor: 'green',
        justifyContent: 'flex-end',
      });
      setSwitchText('ON');
    } else if (switchText === 'ON') {
      setWrapperStyle({
        backgroundColor: 'white',
        justifyContent: 'flex-start',
      });
      setSwitchText('OFF');
    }
  }

  const ToggleSwitchWrapperStyle = {
    ...defaultToggleSwitchWrapperStyle,
    backgroundColor: wrapperStyle.backgroundColor,
    justifyContent: wrapperStyle.justifyContent,
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div onClick={handleClick} style={ToggleSwitchWrapperStyle}>
        <button style={defaultToggleSwitchStyle}></button>
      </div>
      <p>{switchText}</p>
    </div>
  );
}
