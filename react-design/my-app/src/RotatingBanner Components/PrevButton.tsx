type NextButtonProps = {
  onCustomClick: () => void;
};

export default function PrevButton({ onCustomClick }: NextButtonProps) {
  function handleClick() {
    onCustomClick();
  }

  return (
    <button
      onClick={handleClick}
      className="rounded m-1 p-1 border border-solid border-black">
      PREV
    </button>
  );
}
