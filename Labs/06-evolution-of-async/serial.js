const { promisify } = require("util");

const print = (err, contents) => {
  if (err) console.error(err);
  else console.log(contents);
};

const printPromise = promisify(print);
const opA = (cb) => {
  setTimeout(() => {
    cb(null, "A");
  }, 500);
};

const opB = (cb) => {
  setTimeout(() => {
    cb(null, "B");
  }, 250);
};

const opC = (_, cb) => {
  setTimeout(() => {
    cb(null, "C");
  }, 125);
};

opA(printPromise().then(() => console.log("I was thened")));
opB(printPromise.then(() => console.log("I was thened")));
opC(printPromise.then(() => console.log("I was thened")));
