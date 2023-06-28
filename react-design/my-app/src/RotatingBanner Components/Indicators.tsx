type IndicatorProps = {
  count: number;
  currentIndex: number;
  onCustomClick: (currentIndex: number) => void;
};

export default function Indicators({
  count,
  currentIndex,
  onCustomClick,
}: IndicatorProps) {
  function renderIndicator() {
    const indicators = [];
    for (let i = 0; i < count; i++) {
      indicators.push(
        <button className="w-8 border border-solid border-black">{i}</button>
      );
    }
    return indicators;
  }

  return <div className="flex">{renderIndicator()}</div>;
}
