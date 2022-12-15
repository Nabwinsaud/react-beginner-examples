import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const FilterOptions = () => {
  const location = useLocation();
  console.log(location);
  const search = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const sortOptions = [
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
    { value: "lowtohigh", label: "Price: Low to High" },
    { value: "hightolow", label: "Price: High to Low" },
  ];

  const genderOptions = [
    { value: "women", label: "Women" },
    { value: "men", label: "Men" },
    { value: "unisex", label: "Unisex" },
    { value: "baby", label: "Baby" },
  ];

  const ageOptions = [
    { value: "latest", label: "Latest Releases" },
    { value: "old", label: "Discontinued Products" },
  ];

  const trendOptions = [{ value: "trending", label: "Trending Products" }];

  const onChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = event.target.value;
  };

  const onChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const gender = event.target.value;
    // navigate.push({
    //   ...location,
    //   search: ?gender=${gender}
    // });
  };

  const onChangeAge = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const age = event.target.value;
    navigate(`/${search}?age=${age}`);
  };

  const onChangeTrend = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const trend = event.target.value;
  };

  return (
    <div className="flex flex-col">
      <label>Sort By:</label>
      <select onChange={onChangeSort}>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label>Gender:</label>
      <select onChange={onChangeGender}>
        {genderOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label>Age:</label>
      <select onChange={onChangeAge}>
        {ageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
