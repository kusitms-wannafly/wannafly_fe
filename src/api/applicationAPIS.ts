import { HttpClient } from '@api/HttpClient';

import {
  ApplicationEditItem,
  ApplicationEditData,
} from '@pages/ApplicationEdit/edit';
import { ApplicationData } from '@pages/ApplicationWrite/write';

//지원서 단건 조회
export const getApplicationDetailAPI = async (formId: number) => {
  try {
    const response = await HttpClient.get(
      `/api/application-forms/${formId}`,
      {},
      {}
    );
    return response;
  } catch {
    return null;
  }
};

//지원서 등록
export const postApplicationAPI = async (form: ApplicationData) => {
  try {
    const response = await HttpClient.post('/api/application-forms', form, {
      Accept: 'application/json',
    });
    return response;
  } catch {
    return null;
  }
};

//지원서 작성 완료 상태 수정
export const patchApplicationStateAPI = async (
  formId: number,
  state: boolean
) => {
  try {
    await HttpClient.patch(
      `/api/application-forms/${formId}/state`,
      {
        isCompleted: state,
      },
      {}
    );
    return;
  } catch {
    return;
  }
};

//지원서 문항 추가
export const postApplicationQuestionAPI = async (
  formId: number,
  item: ApplicationEditItem
) => {
  try {
    const response = await HttpClient.post(
      `/api/application-forms/${formId}/items`,
      item,
      {}
    );
    return response;
  } catch {
    return null;
  }
};

//지원서 수정
export const patchApplicationAPI = async (
  formId: number,
  form: ApplicationEditData
) => {
  try {
    const response = await HttpClient.patch(
      `/api/application-forms/${formId}`,
      form,
      {}
    );
    return response;
  } catch {
    return null;
  }
};

//지원서 모두 조회 (커서 페이징, 동적 쿼리)
//ex. /api/application-forms?cursor=2&size=2&year=2023
// 쿼리 스트링은 nullable
// cursor는 지원서의 id
// cursor 없을 경우 디폴트 첫 데이터
// size 없을 경우 디폴트 9개
// year 없을 경우 년도 상관 없이 모두
// 정렬은 마지막 수정 시간
export const getAllApplicationAPI = async (
  cursor: number | null,
  size: number | null,
  year: number | null
) => {
  const cursorParam = cursor ? `cursor=${cursor}` : '';
  const sizeParam = size ? `size=${size}` : '';
  const yearParam = year ? `year=${year}` : '';
  const paramArr: string[] = [cursorParam, sizeParam, yearParam];
  const param = paramArr.join('&');

  const apiUrl = '/api/application-forms?' + param;
  try {
    const response = await HttpClient.get(apiUrl, {}, {});
    return response;
  } catch {
    return [];
  }
};

export const deleteApplicationAPI = async (formId: number) => {
  try {
    await HttpClient.delete(`/api/application-forms/${formId}`);
    return;
  } catch {
    return;
  }
};
