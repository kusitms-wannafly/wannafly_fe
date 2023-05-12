import HttpClient from '@api/HttpClient';

//지원서 단건 조회
export const getApplicationDetailAPI = async (formId: number) => {
  try {
    const response = await HttpClient.get(
      `/api/application-forms/${formId}`,
      {},
      {}
    );
    return response.data;
  } catch {
    return null;
  }
};
