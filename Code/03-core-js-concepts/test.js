"use strict";

function init(type) {
  let id = 0;
  return (name) => {
    id += 1;
    return {
      id,
      type,
      name,
    };
  };
}

const createAdmin = init("admin");
const createUser = init("user");

const kyle = createUser("Kyle");
const alessio = createAdmin("Alessio");
const isaac = createAdmin("Isaac");
const stuart = createUser("Stuart");

console.log(kyle, alessio, isaac, stuart);

function createSigner(secret) {
  const keypair = createKeypair(secret);
  return function (content) {
    return {
      signed: cryptoSign(content, keypair.privateKey),
      publicKey: keypair.publicKey,
    };
  };
}

const createKeypair = (secret) => ({
  publicKey: secret.toLowerCase(),
  secret,
  privateKey: secret.toUpperCase(),
});

const cryptoSign = (content, key) =>
  content
    .split("")
    .map((char, index) => `${char}${key[index % key.length]}`)
    .join("");

const sign = createSigner("super secret thign");

console.log(sign("This is my secret message"));
