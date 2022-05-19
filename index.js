/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import firstStart from './src/firstStart.js';
import createIncident from './src/incident.js';

const greeting = readlineSync.question('Is this the first run? (yes/no) ');
if (greeting === 'yes') {
  firstStart();
} else {
  createIncident();
}
