import styled from 'styled-components';
import { PageContainer } from '@components/Layout/PageContainer';
import { ClubBox } from '@components/ClubBox';

const ClubBoxGrid = styled.div`
  font-family: 'PretendardBold', sans-serif;
  display: grid;
  flex-direction: row;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  margin-top: 142px;
`;

export const MainPage = () => {

  return (
    <PageContainer header banner>
      <ClubBoxGrid>
        <ClubBox clubName="큐시즘" modifiedDate="4월 13일 수정" date="2023년 상반기" isApplied={false} />
        <ClubBox clubName="넥스터즈" modifiedDate="5월 7일 수정" date="2023년 상반기" isApplied={false} />
        <ClubBox clubName="디프만" modifiedDate="5월 7일 수정" date="2023년 상반기" isApplied={false} />
        <ClubBox clubName="SOPT" modifiedDate="5월 7일 수정" date="2021년 하반기" isApplied={true} />
        <ClubBox clubName="IVE" modifiedDate="5월 7일 수정" date="2020년 상반기" isApplied={true} />
        <ClubBox clubName="르세라핌" modifiedDate="5월 7일 수정" date="2019년 상반기" isApplied={true} />
        <ClubBox clubName="멋쟁이사자처럼" modifiedDate="5월 7일 수정" date="2020년 하반기" isApplied={true} />
        <ClubBox clubName="THE 1975" modifiedDate="5월 7일 수정" date="2020년 하반기" isApplied={true} />
        <ClubBox clubName="예쁜이사자처럼" modifiedDate="5월 7일 수정" date="2020년 하반기" isApplied={true} />
        <ClubBox clubName="건축학개론" modifiedDate="5월 7일 수정" date="2020년 하반기" isApplied={true} />
        <ClubBox clubName="큐시즘" modifiedDate="4월 13일 수정" date="2023년 상반기" isApplied={false} />
        <ClubBox clubName="넥스터즈" modifiedDate="5월 7일 수정" date="2023년 상반기" isApplied={false} />
        <ClubBox clubName="디프만" modifiedDate="5월 7일 수정" date="2023년 상반기" isApplied={false} />
        <ClubBox clubName="SOPT" modifiedDate="5월 7일 수정" date="2021년 하반기" isApplied={true} />
        <ClubBox clubName="IVE" modifiedDate="5월 7일 수정" date="2020년 상반기" isApplied={true} />
        <ClubBox clubName="르세라핌" modifiedDate="5월 7일 수정" date="2019년 상반기" isApplied={true} />
        <ClubBox clubName="멋쟁이사자처럼" modifiedDate="5월 7일 수정" date="2020년 하반기" isApplied={true} />
        <ClubBox clubName="THE 1975" modifiedDate="5월 7일 수정" date="2020년 하반기" isApplied={true} />
        <ClubBox clubName="예쁜이사자처럼" modifiedDate="5월 7일 수정" date="2020년 하반기" isApplied={true} />
        <ClubBox clubName="건축학개론" modifiedDate="5월 7일 수정" date="2020년 하반기" isApplied={true} />
        <ClubBox clubName="큐시즘" modifiedDate="4월 13일 수정" date="2023년 상반기" isApplied={false} />
        <ClubBox clubName="넥스터즈" modifiedDate="5월 7일 수정" date="2023년 상반기" isApplied={false} />
        <ClubBox clubName="디프만" modifiedDate="5월 7일 수정" date="2023년 상반기" isApplied={false} />
        <ClubBox clubName="SOPT" modifiedDate="5월 7일 수정" date="2021년 하반기" isApplied={true} />
        <ClubBox clubName="IVE" modifiedDate="5월 7일 수정" date="2020년 상반기" isApplied={true} />
        <ClubBox clubName="르세라핌" modifiedDate="5월 7일 수정" date="2019년 상반기" isApplied={true} />
        <ClubBox clubName="멋쟁이사자처럼" modifiedDate="5월 7일 수정" date="2020년 하반기" isApplied={true} />
        <ClubBox clubName="THE 1975" modifiedDate="5월 7일 수정" date="2020년 하반기" isApplied={true} />
        <ClubBox clubName="예쁜이사자처럼" modifiedDate="5월 7일 수정" date="2020년 하반기" isApplied={true} />
        <ClubBox clubName="건축학개론" modifiedDate="5월 7일 수정" date="2020년 하반기" isApplied={true} />
        <ClubBox clubName="큐시즘" modifiedDate="4월 13일 수정" date="2023년 상반기" isApplied={false} />
        <ClubBox clubName="넥스터즈" modifiedDate="5월 7일 수정" date="2023년 상반기" isApplied={false} />
        <ClubBox clubName="디프만" modifiedDate="5월 7일 수정" date="2023년 상반기" isApplied={false} />
        <ClubBox clubName="SOPT" modifiedDate="5월 7일 수정" date="2021년 하반기" isApplied={true} />
        <ClubBox clubName="IVE" modifiedDate="5월 7일 수정" date="2020년 상반기" isApplied={true} />
        <ClubBox clubName="르세라핌" modifiedDate="5월 7일 수정" date="2019년 상반기" isApplied={true} />
        <ClubBox clubName="멋쟁이사자처럼" modifiedDate="5월 7일 수정" date="2020년 하반기" isApplied={true} />
        <ClubBox clubName="THE 1975" modifiedDate="5월 7일 수정" date="2020년 하반기" isApplied={true} />
        <ClubBox clubName="예쁜이사자처럼" modifiedDate="5월 7일 수정" date="2020년 하반기" isApplied={true} />
        <ClubBox clubName="건축학개론" modifiedDate="5월 7일 수정" date="2020년 하반기" isApplied={true} />
      </ClubBoxGrid>
    </PageContainer>
  );
};
