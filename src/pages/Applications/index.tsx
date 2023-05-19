import styled from 'styled-components';
import { PageContainer } from '@components/Layout/PageContainer';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { getAllApplicationAPI } from '@api/applicationAPIS';
import { Banner } from './components/Banner';
//import { ClubBox } from '@pages/Applications/ClubBox';

// const ClubBoxGrid = styled.div`
//   font-family: 'PretendardBold';
//   display: grid;
//   flex-direction: row;
//   grid-template-columns: repeat(3, 1fr);
//   grid-template-rows: repeat(3, 1fr);
//   gap: 20px;
//   margin-top: 142px;
// `;

interface ApplicationForm {
  applicationFormId: number;
  recruiter: string;
  year: number;
  semester: string;
  isCompleted: boolean;
  lastModifiedTime: string;
}

const APIQUERYSIZE = 12;

export const ApplicationsPage = () => {
  const navigate = useNavigate();

  const [applications, setApplications] = useState<ApplicationForm[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const cursor = useRef<number | null>(null);
  const [ref, inView] = useInView();

  const { year } = useParams();

  const fetch = useCallback(async () => {
    const selectedYear = year === undefined ? null : Number(year);
    const apireturn = getAllApplicationAPI(cursor.current, 12, selectedYear);
    apireturn
      .then((res: ApplicationForm[]) => {
        //console.log(res);
        setApplications((prevApplications) => [...prevApplications, ...res]);
        setHasNextPage(res.length === APIQUERYSIZE);
        if (res.length) {
          if (cursor.current === null) cursor.current = 0;
          cursor.current = res[res.length - 1].applicationFormId;
          //console.log('cursor: ', cursor.current);
        }
      })
      .catch(() => {
        setHasNextPage(false);
      });
  }, []);

  useEffect(() => {
    //console.log('inView:', inView, 'hasNextPage:', hasNextPage);
    if (inView && hasNextPage) {
      fetch();
    }
  }, [fetch, hasNextPage, inView]);

  const handleClickApplication = (formId: number) => {
    navigate(`/edit/${formId}`);
  };

  return (
    <PageContainer header>
      <ApplicationsPageContainer>
        <Banner />
        <ApplicationsContainer>
          {applications.map((el) => {
            return (
              <Application
                key={el.applicationFormId}
                onClick={() => {
                  handleClickApplication(el.applicationFormId);
                }}
              >
                {el.recruiter}
              </Application>
            );
          })}
          <RefContainer ref={ref}></RefContainer>
        </ApplicationsContainer>
      </ApplicationsPageContainer>

      {/* <ClubBoxGrid>
        <ClubBox
          clubName="큐시즘"
          modifiedDate="4월 13일 수정"
          date="2023년 상반기"
          isApplying={false}
        />
        <ClubBox
          clubName="큐시즘"
          modifiedDate="4월 13일 수정"
          date="2023년 상반기"
          isApplying={true}
        />
      </ClubBoxGrid> */}
    </PageContainer>
  );
};

const ApplicationsPageContainer = styled.div`
  padding-top: 75px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ApplicationsContainer = styled.div`
  width: 800px;
  height: 800px;
  margin-top: 150px;
  padding-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Application = styled.div`
  width: 255px;
  height: 150px;
  margin: 8px 0;
  border-radius: 6px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.grey6};

  font-family: 'PretendardMedium';
  color: ${({ theme }) => theme.colors.wht};
`;

const RefContainer = styled.div`
  width: 250px;
  height: 1px;
`;
