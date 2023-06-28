export default function Indicators({ items }: { items: string[] }) {
  return (
    <div className="flex">
      <button className="w-8 border border-solid border-black">0</button>
      <button className="w-8 border border-solid border-black">1</button>
      <button className="w-8 border border-solid border-black">2</button>
      <button className="w-8 border border-solid border-black">3</button>
      <button className="w-8 border border-solid border-black">4</button>
      <button className="w-8 border border-solid border-black">5</button>
    </div>
  );
}
