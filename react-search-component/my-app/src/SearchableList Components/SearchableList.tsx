import SearchBar from './SearchBar';
import TextDisplay from './TextDisplay';
import { useState } from 'react';

type SearchableListProps = {
  list: { id: string; sentence: string }[];
};

export default function SearchableList({ list }: SearchableListProps) {
  const [search, setSearch] = useState('');

  function handleOnSearch(searchText: string) {
    setSearch((prevSearchText) => {
      return searchText;
    });
  }

  return (
    <div>
      <SearchBar onSearch={handleOnSearch} />
      <TextDisplay list={list} searchText={search} />
    </div>
  );
}
