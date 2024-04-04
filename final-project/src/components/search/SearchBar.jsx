import React, { useState } from "react";

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  //   const [filters, setFilters] = useState({
  //     foodWine: false,
  //     wellness: false,
  //     events: false,
  //     openAir: false,
  //     location: "",
  //     personCount: "",
  //     price: ""});

  const handleSearch = () => {
    const results = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // const handleSearch = () => {
    //     let filteredData = data;
    //  // Filtri successivi - da cambiare in base i criteri:
    //  if (filters.foodWine) {
    //     filteredData = filteredData.filter(item => item.experience.includes("Food & Wine"));
    //   }
    //   if (filters.wellness) {
    //     filteredData = filteredData.filter(item => item.experience.includes("Wellness"));
    //   }
    //   if (filters.events) {
    //     filteredData = filteredData.filter(item => item.experience.includes("Events"));
    //   }
    //   if (filters.openAir) {
    //     filteredData = filteredData.filter(item => item.experience.includes("Open Air"));
    //   }
    //   if (filters.location) {
    //     filteredData = filteredData.filter(item => item.location.includes(filters.location));
    //   }
    //   if (filters.personCount) {
    //     filteredData = filteredData.filter(item => item.personCount === parseInt(filters.personCount));
    //   }
    //   if (filters.price) {
    //     filteredData = filteredData.filter(item => item.price === parseInt(filters.price));
    //   }

    //   // Apply search term filter
    //   const results = filteredData.filter(item =>
    //     item.title.toLowerCase().includes(searchTerm.toLowerCase())
    //   );

    //   setSearchResults(results);
    // };

    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
      <div>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
