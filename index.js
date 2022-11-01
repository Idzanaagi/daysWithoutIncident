/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import firstStart from './src/firstStart.js';
import createIncident from './src/createIncident.js';

const question = 'Is this the first run? (y/n) ';

const greeting = readlineSync.question(question);

if (greeting.toLowerCase() === 'yes' || greeting.toLowerCase() === 'y') {
  firstStart();
} else if (greeting.toLowerCase() === 'no' || greeting.toLowerCase() === 'n') {
  createIncident();
} else {
  console.log("Sorry, I only understand 'yes' or 'no' (and ctrl-c)");
}
