import Banner from './banner';
import NextButton from './next-button';
import PrevButton from './prev-button';
import Indicators from './indicators';
import { useEffect, useState } from 'react';
import { Image } from '../../App';

export default function RotatingBanner({ images }: { images: Image[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 1500);

    return () => clearTimeout(timerId);
  }, [currentIndex, images.length]);

  return (
    <>
      <Banner image={images[currentIndex]} />
      <PrevButton
        onPrev={() =>
          setCurrentIndex((currentIndex - 1 + images.length) % images.length)
        }
      />
      <Indicators
        count={images.length}
        currentIndex={currentIndex}
        onSelect={(index: number) => setCurrentIndex(index)}
      />
      <NextButton
        onNext={() => setCurrentIndex((currentIndex + 1) % images.length)}
      />
    </>
  );
}
