import styled from 'styled-components';
import icon_search from '@assets/icons/icon-search.svg';

interface propsType {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  getApplications: () => void;
}
export const Searchbar = ({
  keyword,
  setKeyword,
  getApplications,
}: propsType) => {
  const handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    setKeyword(event.currentTarget.value);
  };

  const handleKeyPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('검색');
      getApplications();
    }
  };

  return (
    <SearchbarContainer>
      <SearchInput
        placeholder="키워드를 입력해주세요"
        value={keyword}
        onChange={handleChangeInput}
        onKeyPress={handleKeyPressEnter}
      />
      <SearchIcon src={icon_search} alt="검색" />
      <InfoText>무료 요금제는 3번까지 키워드 검색이 가능해요!</InfoText>
    </SearchbarContainer>
  );
};

const SearchbarContainer = styled.div`
  width: 100%;
  height: 90px;
  padding-left: 30px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 380px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.grey6};
  border: none;
  border-radius: 6px;
  padding: 0 50px 0 20px;
  color: ${({ theme }) => theme.colors.grey1};
  font-family: 'PretendardMedium';
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 370px;
  top: 12px;
  width: 24px;
`;

const InfoText = styled.div`
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.grey4};
  font-family: 'PretendardMedium';
  font-size: 12px;
`;
