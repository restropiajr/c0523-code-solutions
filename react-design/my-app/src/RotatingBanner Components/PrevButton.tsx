type NextButtonProps = {
  onPrev: () => void;
};

export default function PrevButton({ onPrev }: NextButtonProps) {
  function handleClick() {
    onPrev();
  }

  return (
    <button
      onClick={handleClick}
      className="rounded m-1 p-1 border border-solid border-black">
      PREV
    </button>
  );
}
