type TextDisplayProps = {
  list: { id: string; sentence: string }[];
  searchText: string;
};

export default function TextDisplay({ list, searchText }: TextDisplayProps) {
  const filteredList = list.filter(({ sentence }) => {
    return sentence.includes(searchText);
  });

  function renderList() {
    return filteredList.map(({ id, sentence }) => (
      <li className="list-disc mx-8 my-2 p-" key={id}>
        {sentence}
      </li>
    ));
  }

  return (
    <div>
      <ul>{renderList()}</ul>
    </div>
  );
}
