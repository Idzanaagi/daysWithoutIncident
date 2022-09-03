import readlineSync from 'readline-sync';
import fs from 'fs';

const description = 'Hi. I\'ll help you count the number of days without incident. \nWhether it\'s turning into the Hulk or hitting the pinky on the foot. \nAre you ready to start counting the number of days without incidents? (y/n) ';

const firstStart = () => {
  const greeting = readlineSync.question(description);

  if (greeting.toLowerCase() === 'yes' || greeting.toLowerCase() === 'y') {
    const createDate = new Date();
    const startingPointDays = createDate.toISOString().split('T')[0];
    console.log('Done!\nWhen the incident happens, start me up again');

    fs.writeFile('forData.txt', startingPointDays.toString(), (err) => {
      if (err) throw new Error('File write failed');
    });
  } else if (greeting.toLowerCase() === 'no' || greeting.toLowerCase() === 'n') {
    console.log('When you\'re ready, start me up again.');
  } else {
    console.log("Sorry, I only understand 'yes' or 'no' (and ctrl-c)");
  }
};

export default firstStart;
