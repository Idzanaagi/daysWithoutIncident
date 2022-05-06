const formattingDate = (arg) => {
  const getPartsOfDate = arg.split('-');
  const filteredParts = getPartsOfDate.map((item) => (item.startsWith('0') ? item.slice(1) : item));
  const [yy, mm, dd] = filteredParts;
  const newDate = new Date(yy, mm, dd);
  return newDate;
};

export default formattingDate;
