import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log(`useState`, isClicked);

  function handleClick() {
    console.log(`before setter`, isClicked);
    setIsClicked(!isClicked);
    console.log(`after setter`, isClicked);
  }

  const buttonStyle = {
    backgroundColor: isClicked ? color : 'white',
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {text}
    </button>
  );
}
