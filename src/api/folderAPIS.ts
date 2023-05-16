import { HttpClient } from "@api/HttpClient";

// import {
// } from '@pages/Main/componenets/YearMenu';

/*
지원서 보관함 생성
POST /api/application-folders
Content-Type: application/json
Authorization: Bearer ...
{
	"year": 2023
}
*/

/*
지원서 보관함 모두 조회
GET /api/application-folders
Content-Type: application/json
Authorization: Bearer ...
*/

export const getFolderAPI = async () => {
  try {
    const response = await HttpClient.get(
      '/api/application-folders',
      {},
      {}
    );
    return response;
  } catch {
    return null;
  }
}

export const postFolderAPI = async (year: number) => {  
  try {
    const response = await HttpClient.post('/api/application-folders', year, {
      Accept: 'application/json',
    });
    return response;
  } catch {
    return null;
  }
};
