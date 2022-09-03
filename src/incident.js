/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import { getDiffrent } from '../diffrentDate.js';

const questionAbout = 'Did the incident happen? (y/n) ';

const createIncident = () => {
  const question = readlineSync.question(questionAbout);
  if (question.toLowerCase() === 'yes' || question.toLowerCase() === 'y') {
    console.log(`I'm sorry. Days without incident: ${getDiffrent()}`);
  } else if (question.toLowerCase() === 'no' || question.toLowerCase() === 'n') {
    console.log(`Keep it up! Days without incident: ${getDiffrent()}`);
  } else {
    console.log("Sorry, I only understand 'yes' or 'no' (and ctrl-c)");
  }
};

export default createIncident;
