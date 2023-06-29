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

  function handleOnPrev() {
    setCurrentIndex((prevCurrentIndex) => {
      return (prevCurrentIndex - 1 + items.length) % items.length;
    });
  }

  function handleOnSelect(index: number) {
    setCurrentIndex((prevCurrentIndex) => {
      return index;
    });
  }

  function handleOnNext() {
    setCurrentIndex((prevCurrentIndex) => {
      return (prevCurrentIndex + 1) % items.length;
    });
  }

  return (
    <>
      <Banner item={items[currentIndex]} />
      <PrevButton onPrev={handleOnPrev} />
      <Indicators
        count={items.length}
        currentIndex={currentIndex}
        onSelect={handleOnSelect}
      />
      <NextButton onNext={handleOnNext} />
    </>
  );
}
