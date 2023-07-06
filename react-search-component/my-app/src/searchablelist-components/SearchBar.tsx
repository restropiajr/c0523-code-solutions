import { ChangeEvent } from 'react';

type Props = {
  onSearch: (searchText: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onSearch(event.target.value);
  }

  return (
    <div>
      <label>
        <input
          onChange={handleChange}
          className="m-2 p-1 border border-solid border-black rounded w-1/4"
          type="search"
          placeholder="Search"
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </label>
    </div>
  );
}
