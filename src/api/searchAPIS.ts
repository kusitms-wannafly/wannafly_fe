import { HttpClient } from '@api/HttpClient';

//키워드 검색
export const getSearchedApplications = async (keyword: string) => {
  try {
    const response = await HttpClient.get(
      `/api/application-items?keyword=${keyword}`,
      {},
      {}
    );
    return response;
  } catch {
    return [];
  }
};
