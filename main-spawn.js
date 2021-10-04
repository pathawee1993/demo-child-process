const child_process = require('child_process');

for (var i = 0; i < 5; i++){
    var myProcess = child_process.spawn('node',['child.js',(Math.random()*100).toFixed(0)])
    myProcess.stdout.on('data', (data) => console.log(data.toString()));
    myProcess.stderr.on('data', (error) => console.log(error.toString()));
    myProcess.on('close', (data) => console.log('exit with code '+data));
}