import './App.css';
import AppDrawer from './Components/AppDrawer';
import { useState } from 'react';

type MenuItems = { uuid: string; item: string }[];

const menuItems: MenuItems = [
  {
    uuid: '9db33365-f18d-4182-bb11-6a07149cb0d8',
    item: 'Agents',
  },
  {
    uuid: 'ab1d5279-c499-40de-be76-3440583260ed',
    item: 'Weapons',
  },
  {
    uuid: '3ad77e61-222a-4081-912c-afd53a8e7af3',
    item: 'Skins',
  },
];

export default function App() {
  const [menuItem, setMenuItem] = useState('');

  function handleOnClickMenu(menuItem: string) {
    setMenuItem((prevMenuItem) => {
      return menuItem;
    });
  }

  return (
    <div>
      <AppDrawer onClickMenu={handleOnClickMenu} menuItems={menuItems} />
      <div className="main-content flex justify-center items-center">
        <h1 className="text-black text-6xl">{menuItem}</h1>
      </div>
    </div>
  );
}
