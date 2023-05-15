import React, { useEffect, useState } from 'react';

type DropDownProps = {
  cities: string[];
  showDropDown: boolean;
  toggleDropDown: () => void;
  citySelection: (city: string) => void;
};

export const DropDown: React.FC<DropDownProps> = ({
  cities,
  citySelection,
}: DropDownProps) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * Handle passing the city name
   * back to the parent component
   *
   * @param city  The selected city
   */
  const onClickHandler = (city: string): void => {
    citySelection(city);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {cities.map((city: string, index: number) => (
          <p
            key={index}
            onClick={() => {
              onClickHandler(city);
            }}
          >
            {city}
          </p>
        ))}
      </div>
    </>
  );
};

