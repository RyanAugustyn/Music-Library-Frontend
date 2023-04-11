import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//music by album, artist, genre, release date, or title.

const DropdownMenu = (props) => {
  const options = [
    { label: "Album", value: "album" },
    { label: "Artist", value: "artist" },
    { label: "Genre", value: "genre" },
    { label: "Release date", value: "release_date" },
    { label: "Title", value: "title" },
  ];

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
    props.setDropdownValue(event.target.value);
  };

  return (
    <div className="ml-3">
      <Dropdown
        label="Choose a search option"
        options={options}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default DropdownMenu;
