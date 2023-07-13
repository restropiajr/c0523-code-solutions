import React from 'react';
import './App.css';
import RotatingBanner from './components/rotating-banner-components/rotating-banner';

export type Image = {
  src: string;
  alt: string;
};

const images: Image[] = [
  {
    src: '/images/001.png',
    alt: 'bulbasaur',
  },
  {
    src: '/images/004.png',
    alt: 'charmander',
  },
  {
    src: '/images/007.png',
    alt: 'squirtle',
  },
  {
    src: '/images/025.png',
    alt: 'pikachu',
  },
  {
    src: '/images/039.png',
    alt: 'jigglypuff',
  },
];

export default function App() {
  return (
    <div className="flex justify-center items-center flex-col border-2 border-black w-[900px] relative">
      <RotatingBanner images={images} />
    </div>
  );
}
