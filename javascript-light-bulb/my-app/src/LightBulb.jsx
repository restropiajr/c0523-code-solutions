import { useState } from 'react';

export default function LightBulb() {
  const [status, setStatus] = useState('on');

  let lightBulbStyle;
  function handleClick() {
    if (status === 'on') {
      lightBulbStyle = {
        backgroundColor: '#faea84',
      };
    } else if (status === 'off') {
      lightBulbStyle = {
        backgroundColor: '#525252',
      };
    }
    setStatus(status === 'on' ? 'off' : 'on');
  }

  return (
    <div
      className="lightbulb"
      onClick={handleClick}
      style={lightBulbStyle}></div>
  );
}
