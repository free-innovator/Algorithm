// ==================================================
//  input
// ==================================================
// const num = +require('fs').readFileSync('dev/stdin').toString();
// const str = require('fs').readFileSync('dev/stdin').toString().trim();
// const data = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(x=>+x);
// const data = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(x=>+x);
// const data = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(x=>x.trim());
// const data = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(x=>x.trim().split(' ').map(x=>+x));
// const data = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(x=>x.trim().split(' ').map(x=>x.trim()));

// ==================================================
//  function
// ==================================================
function f0nd(x, n) {
    return new Array(Math.max(n - x.toString().length, 0) + 1).join("0") + x;
}
function printArr2D(arr) {
    let output = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            output += arr[i][j] + " ";
        }
        output += "\n";
    }
    process.stdout.write(output);
}
function printArr(arr) {
    let output = "";
    for (let i = 0; i < arr.length; i++) {
        output += arr[i] + " ";
    }
    process.stdout.write(output + "\n");
}

// ==================================================
//  process.memoryUsage()
// ==================================================
const { heapTotal, heapUsed, external } = process.memoryUsage();
console.log("=====================================================");
console.log(Math.floor((heapTotal + heapUsed + external) / 1024) + "KB");
console.log(process.memoryUsage());
