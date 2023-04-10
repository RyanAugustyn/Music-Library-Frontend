import React, { useState } from 'react';

//music by album, artist, genre, release date, or title.

const DropdownMenu = (props) => {

    const options = [
        { label: 'Album', value: 'album' },
        { label: 'Artist', value: 'artist' },
        { label: 'Genre', value: 'genre' },
        { label: 'Release date', value: 'release_date' },
        { label: 'Title', value: 'title' },
      ];
     
      const [value, setValue] = useState('title');
     
      const handleChange = (event) => {
        event.preventDefault();
        setValue(event.target.value);
        props.setDropdownValue(value);
      };
      console.log(value);
      return (
        <div>
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