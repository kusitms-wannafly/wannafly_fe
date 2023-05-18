import React, { useState } from 'react';

const years = [
  '2023년',
  '2022년',
  '2021년',
  '2020년',
  '2019년',
  '2018년',
  '2017년',
  '2016년',
  '2015년',
  '2014년',
  '2013년',
];

export default function SelectMenu({ onYearSelect: number }) {
  const [Select, setSelect] = useState(years[0]);

  const handleYearSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
    onYearSelect(e.target.value);
  };

  return (
    <div className="App">
      <select value={Select} onChange={handleYearSelect}>
        {years.map((year, idx) => {
          return (
            <option key={idx} value={year}>
              {year}
            </option>
          );
        })}
      </select>
    </div>
  );
}
