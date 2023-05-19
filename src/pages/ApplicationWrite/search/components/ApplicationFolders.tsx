import styled from 'styled-components';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { getAllApplicationAPI } from '@api/applicationAPIS';
import { ApplicationFolder } from './ApplicationFolder';
import { SearchState, ApplicationForm } from '..';

interface propsType {
  setSearchState: React.Dispatch<React.SetStateAction<SearchState>>;
  setDetailId: React.Dispatch<React.SetStateAction<number>>;
}
const APIQUERYSIZE = 12;

export const ApplicationFolders = ({
  setSearchState,
  setDetailId,
}: propsType) => {
  //지원서 목록
  const [applications, setApplications] = useState<ApplicationForm[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const cursor = useRef<number | null>(null);
  const [ref, inView] = useInView();

  const fetch = useCallback(async () => {
    const apireturn = getAllApplicationAPI(cursor.current, 12, null);
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
    <ApplicationFoldersContainer>
      {applications.map((el) => {
        return (
          <ApplicationFolder
            key={el.applicationFormId}
            applicationFormId={el.applicationFormId}
            recruiter={el.recruiter}
            year={el.year}
            semester={el.semester}
            isCompleted={el.isCompleted}
            setSearchState={setSearchState}
            setDetailId={setDetailId}
          />
        );
      })}
      <RefContainer ref={ref}></RefContainer>
    </ApplicationFoldersContainer>
  );
};

const ApplicationFoldersContainer = styled.div`
  height: 80%;
  overflow-y: scroll;
  /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative;
`;

const RefContainer = styled.div`
  width: 100px;
  height: 1px;
`;
