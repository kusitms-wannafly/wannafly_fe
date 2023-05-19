import styled from 'styled-components';
import { PageContainer } from '@components/Layout/PageContainer';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { getAllApplicationAPI } from '@api/applicationAPIS';
import { Banner } from './components/Banner';
import { Application } from './components/Application';

export interface ApplicationForm {
  applicationFormId: number;
  recruiter: string;
  year: number;
  semester: string;
  isCompleted: boolean;
  lastModifiedTime: string;
}

const APIQUERYSIZE = 12;

export const ApplicationsPage = () => {
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

  return (
    <PageContainer header>
      <ApplicationsPageContainer>
        <Banner />
        <ApplicationsContainer>
          {applications.map((el) => {
            return <Application key={el.applicationFormId} form={el} />;
          })}
          <RefContainer ref={ref}></RefContainer>
        </ApplicationsContainer>
      </ApplicationsPageContainer>
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

const RefContainer = styled.div`
  width: 250px;
  height: 1px;
`;
