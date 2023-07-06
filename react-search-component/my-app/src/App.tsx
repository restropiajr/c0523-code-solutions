import './App.css';
import SearchableList from './searchablelist-components/SearchableList';

export type List = { id: string; sentence: string }[];

const list: List = [
  {
    id: '36bb7aea-9c9c-45ec-97b4-3abfd4096291',
    sentence: 'The quick brown fox jumps over the lazy dog.',
  },
  {
    id: '08c5a1ee-9f33-4997-a29b-cb759851b48d',
    sentence: 'She sells seashells by the seashore.',
  },
  {
    id: '68f5b891-0cf9-4000-9b2b-020c6419f659',
    sentence: 'The sun is shining brightly in the clear blue sky.',
  },
  {
    id: '8d8eda86-adc4-4664-bd36-aa4cc6f18b9b',
    sentence: 'I enjoy reading books in my free time.',
  },
  {
    id: '00a79801-9bf6-4926-a3e8-3f42740f2944',
    sentence: 'The concert was absolutely amazing!',
  },
  {
    id: '28213466-1487-48f9-ae71-391bfb84e5d4',
    sentence: 'He always takes the time to help others.',
  },
  {
    id: 'b7993b15-8bc6-46cc-a40c-99fe879bb97c',
    sentence: 'The aroma of freshly baked bread filled the air.',
  },
  {
    id: '39d8cb64-953c-4aed-973e-de0c134ae874',
    sentence: 'They danced and laughed all night long.',
  },
  {
    id: 'f2c83d1e-41fd-4ed6-a1e6-5b4207c59c9f',
    sentence: 'The majestic mountains stood tall against the horizon.',
  },
  {
    id: '7ebf2e5e-12d3-4100-93c3-1b43333593a5',
    sentence: "I can't wait to explore new places and make lasting memories.",
  },
];

function App() {
  return <SearchableList list={list} />;
}

export default App;
