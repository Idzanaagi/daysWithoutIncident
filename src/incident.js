/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import fs from 'fs';
import formattingDate from '../diffrentDate.js';

const createIncident = () => {
  const question = readlineSync.question('Did the incident happen? (yes/no) ');
  let diffrent;

  if (question === 'no') {
    console.log('Keep it up!');
  }

  if (question === 'yes') {
    const contents = fs.readFileSync('forData.txt', 'utf8');
    const oldDate = formattingDate(contents);

    const createDate = new Date();
    const endPointDays = createDate.toISOString().split('T')[0];
    const nowDate = formattingDate(endPointDays);

    const delta = nowDate.getTime() - oldDate.getTime();
    diffrent = console.log(`I'm sorry. Days without incident: ${Math.floor(delta / 1000 / 60 / 60 / 24)}`);
  }
  return diffrent;
};

export default createIncident;

/*
const getDifferenceOfDays= () => {
  const nowDate = formattingDate(str1);
  const oldDate = formattingDate(str2);
  const delta = nowDate.getTime() - oldDate.getTime();
  const diffrent = `I'm sorry. Days without incident: ${Math.floor(delta / 1000 / 60 / 60 / 24)}`;
  return diffrent;
};
*/
