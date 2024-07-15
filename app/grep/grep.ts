import { readFileSync } from "fs";

let args = process.argv;

/** EXPLANATION OF ABOVE
When running `pnpm ts-node app/grep/grep.ts filename search_string`, we get:
 
```bash
pnpm run-demo app/grep/grep.ts filename search_string

> ztm-typescript-course-content@0.1.0 run-demo /Users/justin/Desktop/ztm-typescript
> ts-node "app/grep/grep.ts" "filename" "search_string"

[
  '/Users/justin/Desktop/ztm-typescript/node_modules/ts-node/dist/bin.js',
  '/Users/justin/Desktop/ztm-typescript/app/grep/grep.ts',
  'filename',
  'search_string'
]
  ```

which means if we break down the command `pnpm ts-node app/grep/grep.ts filename search_string` we get an args array which equals
    args[0] = `ts-node`
    args[1] = `app/grep/grep.ts`
    args[2] = `filename`
    args[3] = `search_string`
 */

// so let's get filename and search_string from the args array
args = process.argv.slice(2);
const filename = args[0];
const searchString = args[1];

const contents = readFileSync(filename, "utf8");

const lines = contents.split("\n");

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes(searchString)) {
    console.log(lines[i]);
  }
}
