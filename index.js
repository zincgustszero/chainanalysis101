const chainanalysis101 = require('chainanalysis101');
const chainanalysis101_extend = require('chainanalysis101-extend');
const eslint = require('eslint');
const socket.io = require('socket.io');
const react_dom = require('react-dom');
const dotenv = require('dotenv');
const validator = require('validator');
const nodemon = require('nodemon');
const bluebird = require('bluebird');
const mongoose = require('mongoose');
const multer = require('multer');
const axios = require('axios');
const xml2js = require('xml2js');
const underscore = require('underscore');
const cors = require('cors');
const react_redux = require('react-redux');

const os = require('os');
console.log('Hostname:', os.hostname());

// Estimate gas cost for a transaction
web3.eth.estimateGas({
  from: senderAddress,
  to: receiverAddress,
  value: amountToSend
}).then(gasEstimate => {
  console.log('Gas estimate:', gasEstimate);
}).catch(err => {
  console.error('Error estimating gas:', err);
});

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);

const crypto = require('crypto');
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret).update('Hello HMAC').digest('hex');
console.log(`HMAC: ${hash}`);

const user = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = user;
console.log(`User's name is ${firstName} ${lastName}`);

const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
console.log(clone);

const assert = require('assert');
assert.doesNotReject(
  async () => {
    await Promise.reject(new Error('Oops'));
  },
  Error,
  'Promise should not reject'
);

const user = { name: 'John Doe', age: 30 };
const { name, age } = user;
console.log(`User name is ${name} and age is ${age}.`);

const fs = require('fs');
fs.unlink('file.txt', err => {
  if (err) throw err;
  console.log('File deleted successfully');
});

for (let i = 0; i < 5; i++) {
    console.log(`Loop iteration: ${i}`);
}

const fs = require('fs');
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');
readableStream.pipe(writableStream);
console.log('File copied using streams');