import styled from 'styled-components';
import icon_close from '@assets/icons/icon-close.svg';

interface propsType {
  showGrammarCheck: boolean;
  setShowGrammarCheck: React.Dispatch<React.SetStateAction<boolean>>;
}
export const GrammarCheck = ({
  showGrammarCheck,
  setShowGrammarCheck,
}: propsType) => {
  const handleClickCloseBtn = () => {
    setShowGrammarCheck(false);
  };

  return (
    <GrammarCheckConatiner>
      <div className="header">
        <div className="text">맞춤법 검사 결과</div>
        <GrammarCheckCloseBtn onClick={handleClickCloseBtn}>
          <img
            src={icon_close}
            alt="맞춤법 검사 닫기
            "
          />
        </GrammarCheckCloseBtn>
      </div>
      <CheckedAnswer>검사 결과라라라라라라</CheckedAnswer>
    </GrammarCheckConatiner>
  );
};

const GrammarCheckConatiner = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.grey2};
  font-family: 'PretendardMedium';
  font-size: 14px;

  div.header {
    padding: 10px 0;
    display: flex;
    align-items: center;
    div.text {
      margin-right: 5px;
      margin-bottom: 4px;
    }
  }
`;

const CheckedAnswer = styled.div`
  width: 100%;
  height: 200px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.grey8};
  border-radius: 6px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  font-family: 'PretendardLight';
  font-size: 14px;
  line-height: 20px;
`;

const GrammarCheckCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;

  img {
    width: 18px;
  }
  &:hover {
    cursor: pointer;
  }
`;
