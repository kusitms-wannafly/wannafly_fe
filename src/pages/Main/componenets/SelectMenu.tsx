import React, { useState } from 'react';

const years = [
  2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
];

interface propsType {
  setSelectedYear: React.Dispatch<React.SetStateAction<number>>;
}
export default function SelectMenu({ setSelectedYear }: propsType) {
  const [Select, setSelect] = useState(years[0]);

  const handleYearSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
    setSelectedYear(e.target.value);
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
