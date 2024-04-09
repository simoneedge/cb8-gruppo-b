import { useState, useEffect } from "react";
import Fuse from "fuse.js";

const SearchBar = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fuse, setFuse] = useState(null);

  useEffect(() => {
    setFuse(new Fuse(data, { keys: ["title"] }));
  }, [data]);

  const onHandleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (fuse) {
      const results = fuse.search(e.target.value).map(({ item }) => item);
      onSearch(results);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for..."
        value={searchTerm}
        onChange={onHandleSearch}
      />
    </div>
  );
};

export default SearchBar;