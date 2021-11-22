"use strict";

export const upper = (str) => {
  if (typeof str === "symbol") str = str.toString();
  return str.toUpperCase();
};
