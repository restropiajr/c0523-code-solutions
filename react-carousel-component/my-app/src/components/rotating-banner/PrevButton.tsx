import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

type Props = {
  onPrev: () => void;
};

export default function PrevButton({ onPrev }: Props) {
  return (
    <button onClick={() => onPrev()} className="absolute top-50% left-20">
      <BsFillArrowLeftSquareFill size={50} />
    </button>
  );
}
