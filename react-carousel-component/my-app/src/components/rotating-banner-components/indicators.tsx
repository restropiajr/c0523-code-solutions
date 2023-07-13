import { BsCircleFill } from 'react-icons/bs';
import { BsCircle } from 'react-icons/bs';

type Props = {
  count: number;
  currentIndex: number;
  onSelect: (index: number) => void;
};

export default function Indicators({ count, currentIndex, onSelect }: Props) {
  function renderIndicator() {
    const indicators = [];
    for (let index = 0; index < count; index++) {
      indicators.push(
        <button
          key={index}
          type="button"
          onClick={() => onSelect(index)}
          className="m-1">
          {index === currentIndex ? <BsCircleFill /> : <BsCircle />}
        </button>
      );
    }
    return indicators;
  }

  return <div className="flex">{renderIndicator()}</div>;
}
