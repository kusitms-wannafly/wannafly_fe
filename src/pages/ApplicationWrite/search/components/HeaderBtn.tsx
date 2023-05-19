import styled from 'styled-components';
import { SearchState } from '..';

interface propsType {
  type: any;
  isSelected: boolean;
  setSearchState: React.Dispatch<React.SetStateAction<SearchState>>;
}
export const HeaderBtn = ({ type, isSelected, setSearchState }: propsType) => {
  const handleClickHeaderBtn = () => {
    setSearchState({ currentState: type });
  };

  return (
    <Button
      className={isSelected ? 'selected' : ''}
      onClick={handleClickHeaderBtn}
    >
      {type}
    </Button>
  );
};

const Button = styled.button`
  height: 40px;
  padding: 0 14px;
  margin: 0 3px;

  border: none;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.grey8};
  color: ${({ theme }) => theme.colors.grey3};

  font-family: 'PretendardMedium';

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.navy4};
    color: ${({ theme }) => theme.colors.wht};
  }

  &.selected {
    background-color: ${({ theme }) => theme.colors.navy4};
    color: ${({ theme }) => theme.colors.wht};
  }
`;
