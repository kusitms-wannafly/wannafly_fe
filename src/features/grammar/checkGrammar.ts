import { axiosInstance } from '@api/HttpClient';

//맞춤법 검사 후 수정된 결과를 문자열로 반환
export const checkGrammar = (answer: string): Promise<string> => {
  return axiosInstance
    .post('/api/grammar/check', {
      content: answer,
    })
    .then((res) => {
      return res.data?.content;
    })
    .catch(() => {
      return '검사 결과가 없습니다.';
    });
};
