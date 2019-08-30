// const fs = require('fs');
// const EventEmitter = require('events');
// class WithTime extends EventEmitter {
//     execute(asyncFunc, ...args) {
//         this.emit('start!!!');
//         console.time('execute!');
//         asyncFunc(...args, (err, data) => {
//             if (err) {
//                 return this.emit('error', err);
//             }

//             this.emit('data', data);
//             console.timeEnd('execute!');
//             this.emit('end');
//         });
//     }
// }
// const withTime = new WithTime();
// withTime.on('start!!!', () => console.log('About to execute'));
// withTime.on('end', () => console.log('Done with execute'));
// withTime.on('data', (d)=> console.log('DATA', d))
// withTime.on('error', (err) => {
//     // do something with err, for example log it somewhere
//     console.log('ERRORJEFF: ', err)
// });
// withTime.execute(fs.readFile, __filename);
const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for (let i = 0; i <= 1e6; i++) {
    file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
}

file.end();
