/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import firstStart from './src/firstStart.js';
import createIncident from './src/incident.js';

const question = 'Is this the first run? (yes/no) ';

const greeting = readlineSync.question(question.toLowerCase());
if (greeting !== 'yes' && greeting !== 'no') {
  console.log("Sorry, I only understand 'yes' or 'no' (and ctrl-c)");
}
if (greeting === 'yes') {
  firstStart();
}
if (greeting === 'no') {
  createIncident();
}
