type TextDisplayProps = {
  list: { id: string; sentence: string }[];
  searchText: string;
};

export default function TextDisplay({ list, searchText }: TextDisplayProps) {
  const filteredList = list.filter(({ sentence }) => {
    return sentence.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div>
      {filteredList.length > 0 ? (
        <ul>
          {filteredList.map(({ id, sentence }) => (
            <li className="list-disc mx-8 my-2" key={id}>
              {sentence}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mx-3 my-2">No items match the filter.</p>
      )}
    </div>
  );
}
