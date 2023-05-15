//공백 제거한 문자열 길이 반환
export const getTrimmedLength = (text: string) => {
  const trimStr = text.split(' ').join('');
  return trimStr.length;
};
