import React, { useState } from 'react';
import { Select } from '@pages/Main/componenets/Select';
import { postFolderAPI } from '@api/folderAPIS';

const years = [
  '연도를 선택하세요',
  '2023년',
  '2022년',
  '2021년',
  '2020년',
  '2019년',
  '2018년',
  '2017년',
];

export default function SelectMenu() {
  const [firstSelect, setFirstSelect] = useState(years[0]);
  const [secondSelect, setSecondSelect] = useState(years[0]);

  // secondSelect 값을 postFolderAPI로 전달
  const handleYearSelect = async (year: string) => {
    const response = await postFolderAPI(parseInt(year));
    console.log(response);
    setSecondSelect(year);
  };

  return (
    <div className="App">
      <Select
        small={true}
        options={years}
        value={secondSelect}
        onChange={(v) => handleYearSelect(v)}
      />
    </div>
  );
}
