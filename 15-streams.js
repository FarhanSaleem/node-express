const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt');

// default 64kb
// last buffer - remainder
// highWaterMark - control size - stream splits the read into different chunks after the kb limit set on this option
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { enconding: 'utf8' })
// fs.readFileSync - synchronously reads the contents of the whole file without chunking

stream.on('data', (result) => {
    console.log(result);
});

stream.on('error', (err) => console.log(err));