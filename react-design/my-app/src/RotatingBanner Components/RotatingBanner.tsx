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

  return (
    <>
      <Banner item={items[currentIndex]} />
      <NextButton />
      <Indicators
        count={items.length}
        currentIndex={currentIndex}
        onCustomClick={setCurrentIndex}
      />
      <PrevButton />
    </>
  );
}
