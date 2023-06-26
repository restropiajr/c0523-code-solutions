export default function UpAndDownButton({ text, onCustomClick }) {
  function handleClick() {
    onCustomClick();
  }

  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
}
