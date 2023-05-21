import styled from 'styled-components';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { getAllApplicationAPI } from '@api/applicationAPIS';
import { ApplicationBox } from './ApplicationBox';

export interface ApplicationForm {
  applicationFormId: number;
  recruiter: string;
  year: number;
  semester: string;
  isCompleted: boolean;
  lastModifiedTime: string;
}

const APIQUERYSIZE = 12;

//무한스크롤
export const ApplicationListBox = () => {
  //지원서 목록
  const [applications, setApplications] = useState<ApplicationForm[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const cursor = useRef<number | null>(null);
  const [ref, inView] = useInView();

  const fetch = useCallback(async () => {
    const apireturn = getAllApplicationAPI(cursor.current, 12, null);
    apireturn
      .then((res: ApplicationForm[]) => {
        setApplications((prevApplications) => [...prevApplications, ...res]);
        setHasNextPage(res.length === APIQUERYSIZE);
        if (res.length) {
          if (cursor.current === null) cursor.current = 0;
          cursor.current = res[res.length - 1].applicationFormId;
        }
      })
      .catch(() => {
        setHasNextPage(false);
      });
  }, []);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetch();
    }
  }, [fetch, hasNextPage, inView]);

  return (
    <ListBoxContainer>
      {applications.map((el) => {
        return (
          <ApplicationBox key={el.applicationFormId} recruiter={el.recruiter} />
        );
      })}
      <RefContainer ref={ref}></RefContainer>
    </ListBoxContainer>
  );
};

const ListBoxContainer = styled.div`
  border: 1px solid blue;
  width: 100%;
  padding: 0 40px;
`;

const RefContainer = styled.div`
  width: 100px;
  height: 1px;
`;
