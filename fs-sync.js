const fs = require('fs');

console.log('start');

const first = fs.readFileSync('./content/first.txt', 'utf8');
const second = fs.readFileSync('./content/second.txt', 'utf8');


fs.writeFileSync('./content/result-sync.txt', `${first}, ${second}`, {flag : 'a'});

console.log('done with the task');
console.log('starting the next one');
