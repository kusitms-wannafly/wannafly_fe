import styled from 'styled-components';
import { HeaderBtn } from './HeaderBtn';
import { State, SearchState } from '..';

interface propsType {
  searchState: any;
  setSearchState: React.Dispatch<React.SetStateAction<SearchState>>;
}
export const ApplicationSearchHeader = ({
  searchState,
  setSearchState,
}: propsType) => {
  const searchTypes: string[] = [State.all, State.category, State.keyword];

  return (
    <SearchHeaderContainer>
      {searchTypes.map((type, idx) => {
        return (
          <HeaderBtn
            key={idx}
            type={type}
            isSelected={searchState.currentState === searchTypes[idx]}
            setSearchState={setSearchState}
          />
        );
      })}
      <FeeInformation>Basic 요금제 이용 중</FeeInformation>
    </SearchHeaderContainer>
  );
};

const SearchHeaderContainer = styled.div`
  display: flex;
  align-items: center;

  width: 450px;
  height: 100px;
`;

const FeeInformation = styled.div`
  color: ${({ theme }) => theme.colors.yellow2};
  font-family: 'PretendardMedium';
  font-size: 14px;

  height: 40px;
  line-height: 40px;

  margin-left: 25px;
`;
