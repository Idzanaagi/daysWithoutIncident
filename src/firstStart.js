import readlineSync from 'readline-sync';
import fs from 'fs';

const firstStart = () => {
  const greeting = readlineSync.question('Hi. I\'ll help you count the number of days without incident. \nWhether it\'s turning into the Hulk or hitting the little finger on the leg. \nAre you ready to start counting the number of days without incidents? (yes/no) ');
  if (greeting === 'yes') {
    const createDate = new Date();
    const startingPointDays = createDate.toISOString().split('T')[0];
    console.log('Done!');
    console.log('When the incident happens, start me up again');

    fs.writeFile('forData.txt', startingPointDays.toString(), (err) => {
      if (err) throw err;
    });
  }

  if (greeting === 'no') {
    console.log('When you\'re ready, start me up again.');
  }
};

export default firstStart;
