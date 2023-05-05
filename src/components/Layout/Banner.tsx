import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Banner = () => {
  return (
    <BannerContainer>
      <Title>지원서 보관함</Title>
      <Description>
        작성 완료한 지원서, 작성 중인 지원서를 한 곳에 보관하여 한 번에
        확인하세요.
      </Description>
      <ApplyButton to="/apply">지원서 추가하기</ApplyButton>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  width: 100%;
  height: 130px;
  background-color: ${(props) => props.theme.colors.lightyellow};
`;

const Title = styled.div`
  padding-top: 30px;
  padding-left: 348px;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.div`
  padding-left: 348px;
  font-size: 22px;
`;

const ApplyButton = styled(Link)`
  width: 188px;
  height: 33px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  font-size: 21px;
  font-weight: bold;
  margin-left: 1342px;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  border: box;
  cursor: pointer;
`;
