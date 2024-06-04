import { register } from "node:module";
import { pathToFileURL } from "node:url";

/**
 * This is equivalent of using "--loader ts-node/esm"
   So this:
   node --loader ts-node/esm ./src/index.ts
   is the same as this:
   node --import ./loader.js ./src/index.ts
 */
register("ts-node/esm", pathToFileURL("./"));
