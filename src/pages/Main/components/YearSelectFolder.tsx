import styled from 'styled-components';
import grey_folder_img from '@assets/images/grey_folder.svg';
import plus_icon from '@assets/icons/icon-plus-dark.svg';
import { useState } from 'react';
import { postFolderAPI } from '@api/folderAPIS';

interface Folder {
  year: number;
  count: number;
}
const yearoptions = [
  2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
];

interface propsType {
  folders: Folder[];
  getAllFolders: () => void;
}
export const YearSelectFolder = ({ folders, getAllFolders }: propsType) => {
  const [selectState, setSelectState] = useState<boolean>(false);
  const [yearOption, setYearOption] = useState<number>(2023);

  const handleChangeSelectYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYearOption(Number(e.currentTarget.value));
  };

  const handleClickAddFolderBtn = () => {
    const apireturn = postFolderAPI(yearOption);
    apireturn
      .then(() => {
        getAllFolders();
      })
      .then(() => {
        setSelectState(false);
      });
  };

  const filterYearSelectOption = () => {
    const createdYears = folders.map((row) => row.year);
    const filteredYears = yearoptions.filter((el) => {
      return !createdYears.includes(el);
    });
    return filteredYears;
  };

  return (
    <YearSelectFolderContainer>
      <img src={grey_folder_img} alt="년도 선택 폴더" />
      {selectState ? (
        <>
          <SelectBox onChange={handleChangeSelectYear}>
            <option value="" disabled>
              년도 선택
            </option>
            {filterYearSelectOption().map((year) => {
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </SelectBox>
          <AddFolderBtn onClick={handleClickAddFolderBtn}>
            추가하기
          </AddFolderBtn>
        </>
      ) : (
        <DarkBox
          onClick={() => {
            setSelectState(true);
          }}
        >
          <img src={plus_icon} alt="추가" />
          추가하기
        </DarkBox>
      )}
    </YearSelectFolderContainer>
  );
};

const YearSelectFolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  img {
    width: 220px;
  }
  position: relative;
`;

const DarkBox = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.grey8};
  top: 35%;
  left: 20%;
  width: 120px;
  height: 36px;
  border-radius: 6px;

  color: ${({ theme }) => theme.colors.grey1};
  font-family: 'PretendardMedium';
  text-align: center;

  img {
    width: 14px;
    margin-right: 12px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const SelectBox = styled.select`
  border: none;
  margin: 0;
  padding: 0;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.grey8};
  top: 35%;
  left: 20%;
  width: 120px;
  height: 36px;
  border-radius: 6px;

  color: ${({ theme }) => theme.colors.grey1};
  font-family: 'PretendardMedium';
  text-align: center;

  &:focus {
    outline: none;
  }
`;

const AddFolderBtn = styled.button`
  position: absolute;
  bottom: 40px;
  width: 100px;
  height: 30px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.navy3};
  color: ${({ theme }) => theme.colors.wht};
  border-radius: 6px;
  border: none;
  font-family: 'PretendardMedium';

  &:hover {
    cursor: pointer;
  }
`;
