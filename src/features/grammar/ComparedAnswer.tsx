interface propsType {
  original: string;
  checked: string;
}
export const ComparedAnswer = ({ original, checked }: propsType) => {
  const getDifference = () => {
    const maxLength = Math.max(original.length, checked.length);
    const difference = [];

    for (let i = 0; i < maxLength; i++) {
      if (original[i] !== checked[i]) {
        difference.push(i);
      }
    }
    return difference;
  };

  const renderText = () => {
    const difference = getDifference();
    const renderedText = [];

    for (let i = 0; i < Math.max(original.length, checked.length); i++) {
      const isDifferent = difference.includes(i);

      if (isDifferent) {
        renderedText.push(
          <span key={i} style={{ color: '#FF9ECA' }}>
            {checked[i] || ''}
          </span>
        );
      } else {
        renderedText.push(checked[i] || '');
      }
    }

    return renderedText;
  };

  return <>{renderText()}</>;
};
