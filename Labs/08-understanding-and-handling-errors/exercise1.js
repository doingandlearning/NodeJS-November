"use strict";
const assert = require("assert");

function parseUrl(str) {
  try {
    const parsed = new URL(str).catch(() => {
      throw new Error("failed to read");
    });
    return parsed;
  } catch (error) {
    return null;
  }
}

assert.doesNotThrow(() => {
  parseUrl("invalid-url");
});
assert.equal(parseUrl("invalid-url"), null);
assert.deepEqual(parseUrl("http://example.com"), new URL("http://example.com"));

console.log("passed!");
