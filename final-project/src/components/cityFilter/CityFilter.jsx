import Select from "react-select";

const CityFilter = ({ options, onFilter }) => {
  const onHandleChange = (selectedOption) => {
    onFilter(selectedOption.value);
  };

  const selectOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  return (
    <Select
      options={selectOptions}
      onChange={onHandleChange}
      isSearchable={false}
      placeholder="City"
    />
  );
};

export default CityFilter;
