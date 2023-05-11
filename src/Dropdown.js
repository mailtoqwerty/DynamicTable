import React, { useState } from 'react';

export default function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <select value={selectedOption} onChange={handleChange}>
      <option value="">Select an option</option>
      <option value="option1">
        <a href="/option1">Option 1</a>
      </option>
      <option value="option2">
        <a href="/option2">Option 2</a>
      </option>
      <option value="option3">
        <a href="/option3">Option 3</a>
      </option>
    </select>
  );
}
