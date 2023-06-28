import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicators from './Indicators';

export default function RotatingBanner({ items }: { items: string[] }) {
  return (
    <>
      <Banner items={items} />
      <NextButton items={items} />
      <Indicators items={items} />
      <PrevButton items={items} />
    </>
  );
}
