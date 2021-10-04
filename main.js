const fs = require('fs');
const child_process = require('child_process');

child_process.exec('node child.js ' + (Math.random()*100).toFixed(0), (error, stdout, stderr) =>{
    if (error){
        console.log(error.stack);
    }
    console.log('stdout > '+stdout);
    console.log('stderr > '+stderr);
})