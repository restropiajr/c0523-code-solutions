import SearchBar from './SearchBar';
import TextDisplay from './TextDisplay';
import { useState } from 'react';
import { List } from '../App';

export default function SearchableList({ list }: { list: List }) {
  const [search, setSearch] = useState('');

  function handleSearch(searchText: string) {
    setSearch((prevSearchText) => {
      return searchText;
    });
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <TextDisplay list={list} searchText={search} />
    </div>
  );
}
