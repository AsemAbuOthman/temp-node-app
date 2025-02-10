const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);

//methode return the system upTime in seconds
console.log(`The system uptime is ${os.uptime()} seconds :)`);

const currentOS = {

    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem() / (Math.pow(1024, 3)),
    freeMem: os.freemem()  / (Math.pow(1024, 3)),
    allocatedMem: (os.totalmem() - os.freemem()) / (Math.pow(1024, 3))
}

console.log(currentOS);
