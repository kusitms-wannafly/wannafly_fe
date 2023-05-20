import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface propsType {
  year: number;
  count: number;
  idx: number;
}
export const ColorFolder = ({ year, count, idx }: propsType) => {
  const navigate = useNavigate();

  return (
    <ColorFolderContainer
      onClick={() => {
        navigate(`/applications/${year}`);
      }}
    >
      <img
        src={`/src/assets/images/folder_${((idx + 1) % 5) + 1}.svg`}
        alt="년도 선택 폴더"
      />
      <DarkBox>{year}</DarkBox>
      <CountBox>{count}</CountBox>
    </ColorFolderContainer>
  );
};

const ColorFolderContainer = styled.div`
  height: 200px;
  img {
    width: 220px;
  }
  &:hover {
    cursor: pointer;
  }
  position: relative;
`;

const DarkBox = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.grey8};
  top: 35%;
  left: 12%;
  width: 120px;
  height: 36px;
  border-radius: 6px;

  color: ${({ theme }) => theme.colors.grey1};
  font-family: 'PretendardMedium';
  text-align: center;
  padding-top: 10px;
`;

const CountBox = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.wht};
  color: ${({ theme }) => theme.colors.grey7};
  font-family: 'PretendardMedium';
  top: 68%;
  left: 140px;

  width: 45px;
  height: 25px;
  border-radius: 20px;

  text-align: center;
  line-height: 25px;
`;
