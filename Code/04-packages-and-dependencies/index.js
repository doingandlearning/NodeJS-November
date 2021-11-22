"use strict";
import { upper } from "./format.js";

import pino from "pino";
// require.main === module
// module.parent === null

// if (module.parent === null) {
//   const logger = pino();
//   logger.info(format.upper("Started package!"));
//   process.stdin.resume();
// } else {
//   const reverseAndUpper = (str) =>
//     format.upper(str).split("").reverse().join("");
//   module.exports = reverseAndUpper;
// }
