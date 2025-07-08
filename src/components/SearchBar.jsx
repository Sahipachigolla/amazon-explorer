import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import debounce from "lodash.debounce";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  // Debounced callback for parent
  const debouncedSearch = debounce((value) => {
    onSearch(value);
  }, 300); // 300ms delay

  // Trigger on input change
  useEffect(() => {
    debouncedSearch(input);
    return () => debouncedSearch.cancel();
  }, [input]);

  return (
    <div className="w-full sm:w-1/2 flex items-center bg-white rounded-full px-4 py-2 shadow-md">
      <FaSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search products..."
        className="w-full outline-none text-gray-700"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
