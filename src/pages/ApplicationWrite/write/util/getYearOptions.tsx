//올해부터 이전 10년간 연도의 option 요소 반환

export const getYearOptions = () => {
  const yearOptions = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= currentYear - 10; i--) {
    yearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return yearOptions;
};
