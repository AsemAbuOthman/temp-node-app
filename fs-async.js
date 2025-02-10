const fs = require('fs');

console.log('start');

fs.readFile('./content/first.txt', 'utf8', (err, result)=>{

    if(err){

        console.log(err);
        return;
    }

    const first = result;
    // console.log(first);
    
    fs.readFile('./content/second.txt', 'utf8', (err, result)=>{

        if(err){

            console.log(err);
            return;
        }

        const second = result;
        // console.log(second);

        fs.writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result)=>{

            if(err){

                console.log(err);
                return;
                
            }

            console.log('done with the task');
        })
    })
});

console.log('starting the next task');
