import React, { useEffect, useState } from 'react';

type DropDownProps = {
  years: string[];
  showDropDown: boolean;
  toggleDropDown: () => void;
  yearSelection: (year: string) => void;
};

export const DropDown: React.FC<DropDownProps> = ({
  years,
  yearSelection,
}: DropDownProps) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * Handle passing the city name
   * back to the parent component
   *
   * @param year  The selected city
   */
  const onClickHandler = (year: string): void => {
    yearSelection(year);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {years.map((year: string, index: number) => (
          <p
            key={index}
            onClick={() => {
              onClickHandler(year);
            }}
          >
            {year}
          </p>
        ))}
      </div>
    </>
  );
};
