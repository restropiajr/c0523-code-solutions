import React from 'react';
import './App.css';
import RotatingBanner from './RotatingBanner Components/RotatingBanner';

type Items = string[];

const items: Items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

export default function App() {
  return (
    <div className="flex justify-center items-center flex-col">
      <RotatingBanner items={items} />
    </div>
  );
}
