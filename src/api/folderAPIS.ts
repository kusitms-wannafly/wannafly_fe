import { HttpClient } from '@api/HttpClient';

export const getAllFolderAPI = async () => {
  try {
    const response = await HttpClient.get('/api/application-folders', {}, {});
    return response;
  } catch {
    return [];
  }
};

export const postFolderAPI = async (year: number) => {
  try {
    const response = await HttpClient.post('/api/application-folders', {year: year}, {
      Accept: 'application/json',
    });
    return response;
  } catch {
    return null;
  }
};
