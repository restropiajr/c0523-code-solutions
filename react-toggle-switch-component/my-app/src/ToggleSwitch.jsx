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
};

export default function ToggleSwitch() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [switchText, setSwitchText] = useState('OFF');

  function handleClick() {
    if (switchText === 'OFF') {
      setBackgroundColor('green');
      setJustifyContent('flex-end');
      setSwitchText('ON');
    } else if (switchText === 'ON') {
      setBackgroundColor('white');
      setJustifyContent('flex-start');
      setSwitchText('OFF');
    }
  }

  const ToggleSwitchWrapperStyle = {
    ...defaultToggleSwitchWrapperStyle,
    backgroundColor: backgroundColor,
    justifyContent: justifyContent,
  };

  return (
    <>
      <div onClick={handleClick} style={ToggleSwitchWrapperStyle}>
        <button style={defaultToggleSwitchStyle}></button>
      </div>
      <p>{switchText}</p>
    </>
  );
}
