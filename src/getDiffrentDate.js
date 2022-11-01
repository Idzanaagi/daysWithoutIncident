import fs from 'fs';

const formattingDate = (arg) => {
  const getPartsOfDate = arg.split('-');
  const filteredParts = getPartsOfDate.map((item) => (item.startsWith('0') ? item.slice(1) : item));
  const [yy, mm, dd] = filteredParts;
  return new Date(yy, mm, dd);
};

export const getDiffrent = () => {
  const contents = fs.readFileSync('forData.txt', 'utf8');
  const oldDate = formattingDate(contents);

  const createDate = new Date();
  const endPointDays = createDate.toISOString().split('T')[0];
  const nowDate = formattingDate(endPointDays);

  const delta = nowDate.getTime() - oldDate.getTime();
  return Math.floor(delta / 1000 / 60 / 60 / 24);
};

export default getDiffrent;
