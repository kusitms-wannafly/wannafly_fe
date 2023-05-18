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

export default function SelectMenu() {
  const [Select, setSelect] = useState(years[0]);

  // secondSelect 값을 postFolderAPI로 전달
  const handleYearSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //const response = await postFolderAPI(parseInt(year));
    //console.log(response);
    setSelect(e.target.value);
  };

  return (
    <div className="App">
      <select
        value={Select}
        onChange={handleYearSelect}
      >
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
