import { parseISO, getMonth, getDate } from 'date-fns';

//ISO 형식의 string을 -월-일 수정 형태의 문자열로 반환
export const getModifiedDateString = (ISODate: string) => {
  const parsedDate = parseISO(ISODate);
  const month = getMonth(parsedDate);
  const date = getDate(parsedDate);

  return `${month}월 ${date}일 수정`;
};
