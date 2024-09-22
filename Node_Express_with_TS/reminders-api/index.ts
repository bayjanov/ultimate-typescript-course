let x: number = 1;
console.log(x);

// We can use tsc to compile the file to JavaScript and run it with node.

// The other option is to use ts-node which compiles and runs the file in one step.


// Steps to run the file with ts-node:

// 1. run npm init -y to create a package.json file
// 2. run npm install -D ts-node  to install ts-node as a dev dependency
// 3. add a script to the package.json file to run the file with ts-node: "start": "ts-node index.ts"
// 4. run  npm start  to run the file with ts-node


// The other option is to install typescript globally and run the file with tsc and node.

// Steps to install typescript globally:

// 1. run npm install -g typescript to install typescript globally
// 2. run tsc index.ts to compile the file to JavaScript
// 3. run node index.js to run the file with node

