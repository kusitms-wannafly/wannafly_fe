import HttpClient from '@api/HttpClient';

//TODO: api 생기면 테스트해보기
const signupAPI = async () => {
  try {
    const path = '/signup';
    const response = await HttpClient.get(path, {}, {});
    console.log(response);
    return response.data;
  } catch (error) {
    return null;
  }
};

export default signupAPI;
