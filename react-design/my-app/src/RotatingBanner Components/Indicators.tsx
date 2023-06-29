type IndicatorProps = {
  count: number;
  currentIndex: number;
  onSelect: (currentIndex: number) => void;
};

export default function Indicators({
  count,
  currentIndex,
  onSelect,
}: IndicatorProps) {
  function handleClick(index: number) {
    onSelect(index);
  }

  function renderIndicator() {
    const indicators = [];
    for (let index = 0; index < count; index++) {
      indicators.push(
        <button
          key={index}
          type="button"
          onClick={() => handleClick(index)}
          className="rounded w-8 border border-solid border-black"
          style={
            index === currentIndex ? { backgroundColor: 'lightblue' } : {}
          }>
          {index}
        </button>
      );
    }
    return indicators;
  }

  return <div className="flex">{renderIndicator()}</div>;
}
