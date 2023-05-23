import styled from 'styled-components';
import { useState } from 'react';

import { CategorizedItem as CategorizedItemType } from '@pages/Categorize/Edit/Categorized';
import { Searchbar } from './Searchbar';
import { SearchedApplications } from './SearchedApplications';
import { getSearchedApplications } from '@api/searchAPIS';

export const Search = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [applications, setApplications] = useState<CategorizedItemType[]>([]);

  const getApplications = () => {
    const apireturn = getSearchedApplications(keyword);
    apireturn
      .then((res) => {
        setApplications(res);
        setKeyword('');
      })
      .catch(() => {
        setApplications([]);
        setKeyword('');
      });
  };

  return (
    <SearchContainer>
      <Searchbar
        keyword={keyword}
        setKeyword={setKeyword}
        getApplications={getApplications}
      />
      <SearchedApplications applications={applications} />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  width: 100%;
  height: 85%;
  padding: 0 20px;
`;
