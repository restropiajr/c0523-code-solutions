import { ChangeEvent } from 'react';

type SearchBarProps = {
  onSearch: (searchText: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    onSearch(event.target.value);
  }

  return (
    <div>
      <label>
        <input
          onChange={handleOnChange}
          className="m-2 p-1 border border-solid border-black rounded w-1/4"
          type="search"
          placeholder="Search"
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </label>
    </div>
  );
}
