import { BsFillArrowRightSquareFill } from 'react-icons/bs';

type Props = {
  onNext: () => void;
};

export default function NextButton({ onNext }: Props) {
  return (
    <button onClick={() => onNext()} className="absolute top-50% right-20">
      <BsFillArrowRightSquareFill size={50} />
    </button>
  );
}
