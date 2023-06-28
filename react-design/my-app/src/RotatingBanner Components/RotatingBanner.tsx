import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicators from './Indicators';
import { useState } from 'react';

type RotatingBannerProps = {
  items: string[];
};

export default function RotatingBanner({ items }: RotatingBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleCustomClickSelect(index: number) {
    setCurrentIndex((prevCurrentIndex) => {
      return index;
    });
  }

  function handleCustomClickNext() {
    setCurrentIndex((prevCurrentIndex) => {
      return (prevCurrentIndex + 1) % items.length;
    });
  }

  function handleCustomClickPrev() {
    setCurrentIndex((prevCurrentIndex) => {
      return (prevCurrentIndex - 1 + items.length) % items.length;
    });
  }

  return (
    <>
      <Banner item={items[currentIndex]} />
      <PrevButton onCustomClick={handleCustomClickPrev} />
      <Indicators
        count={items.length}
        currentIndex={currentIndex}
        onCustomClick={handleCustomClickSelect}
      />
      <NextButton onCustomClick={handleCustomClickNext} />
    </>
  );
}
