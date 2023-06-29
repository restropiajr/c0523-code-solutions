type NextButtonProps = {
  onNext: () => void;
};

export default function NextButton({ onNext }: NextButtonProps) {
  function handleClick() {
    onNext();
  }

  return (
    <button
      onClick={handleClick}
      className="rounded m-1 p-1 border border-solid border-black">
      NEXT
    </button>
  );
}
