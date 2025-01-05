import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Busque por uma foto..."
        onChange={(e) => onSearch(e.target.value)}
        className="border rounded-l-lg p-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button className="bg-purple-700 text-white px-4 rounded-r-lg hover:bg-purple-800">
        <FaSearch />
      </button>
    </div>
  );
};

