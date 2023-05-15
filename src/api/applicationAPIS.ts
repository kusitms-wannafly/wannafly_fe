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
export const patchApplicationState = async (formId: number) => {
  try {
    await HttpClient.patch(`/api/application-forms/${formId}/state`, {}, {});
    return;
  } catch {
    return;
  }
};

//지원서 문항 추가
export const postApplicationQuestion = async (
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
