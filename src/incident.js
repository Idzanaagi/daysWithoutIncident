/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import { getDiffrent } from '../diffrentDate.js';

const questionAbout = 'Did the incident happen? (yes/no) ';

const createIncident = () => {
  const question = readlineSync.question(questionAbout);
  if (question !== 'yes' && question !== 'no') {
    console.log("Sorry, I only understand 'yes' or 'no' (and ctrl-c)");
  }
  if (question.toLowerCase() === 'no') {
    console.log('Keep it up!');
  }

  if (question.toLowerCase() === 'yes') {
    console.log(`I'm sorry. Days without incident: ${getDiffrent()}`);
  }
};

export default createIncident;
