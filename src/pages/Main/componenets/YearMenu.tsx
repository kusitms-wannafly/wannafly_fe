import React, { useState } from 'react';
import { DropDown } from '@pages/Main/componenets/YearDropDown';

export const YearMenu: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectYear, setSelectYear] = useState<string>('');
  const years = () => {
    return ['2023년', '2022년', '2021년', '2020년', '2019년'];
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   *
   * @param year
   */
  const yearSelection = (year: string): void => {
    setSelectYear(year);
  };

  return (
    <>
      <button
        className={showDropDown ? 'active' : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectYear ? selectYear : '연도를 선택하세요'} </div>
        {showDropDown && (
          <DropDown
            years={years()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            yearSelection={yearSelection}
          />
        )}
      </button>
    </>
  );
};
