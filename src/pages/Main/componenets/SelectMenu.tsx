import React, { useState } from 'react';
import { Select } from '@pages/Main/componenets/Select'
'@sselect';

const years = ['2023년', '2022년', '2021년', '2020년', '2019년', '2018년'];

export default function SelectMenu() {
  const [firstSelect, setFirstSelect] = useState(years[0]);
  const [secondSelect, setSecondSelect] = useState(years[0]);

  return (
    <div className="App">

      <Select
        small={true}
        options={years}
        value={secondSelect}
        onChange={(v) => setSecondSelect(v)}
      />
    </div>
  );
}
