import { HttpClient } from '@api/HttpClient';

//카테고리 조회
export const getAllCategoriesAPI = async () => {
  try {
    const response = await HttpClient.get('/api/categories', {}, {});
    return response;
  } catch {
    return [];
  }
};

//카테고리별 지원항목 조회
export const getCategorizedItemsAPI = async (categoryId: number) => {
  try {
    const response = await HttpClient.get(
      `/api/categories/${categoryId}/application-items`,
      {},
      {}
    );
    return response;
  } catch {
    return [];
  }
};

//카테고리 추가
export const addCategoryAPI = async (name: string) => {
  try {
    await HttpClient.post(
      '/api/categories',
      {
        name,
      },
      {}
    );
    return;
  } catch {
    return;
  }
};

//카테고리 삭제
export const deleteCategoryAPI = async (categoryId: number) => {
  try {
    await HttpClient.delete(`/api/categories/${categoryId}`, {});
    return;
  } catch {
    return;
  }
};
