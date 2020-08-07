// BigInt
// const num = +require('fs').readFileSync('dev/stdin').toString();
// const str = require('fs').readFileSync('dev/stdin').toString().trim();
// const data = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(x=>+x);
// const data = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(x=>+x);
// const data = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(x=>x.trim());
// const data = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(x=>x.trim().split(' ').map(x=>+x));
// const data = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(x=>x.trim().split(' ').map(x=>x.trim()));

/* function */
function f0nd(x, n) {
    return new Array(Math.max(n - x.toString().length, 0) + 1).join("0") + x;
}
function print2D(arr) {
    let output = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            output += arr[i][j] + " ";
        }
        output += "\n";
    }
    process.stdout.write(output);
}
function print(arr) {
    let output = "";
    for (let i = 0; i < arr.length; i++) {
        output += arr[i] + " ";
    }
    process.stdout.write(output + "\n");
}

/* main */
const data = require("fs").readFileSync("dev/stdin").toString().trim().split(" ");
const [K, L] = [BigInt(data[0]), +data[1]];

/* ref: https://www.acmicpc.net/source/16419137 */
for (let i = 2n; i < L; i++) {
    if (ast[i] && K % i === 0n) {
        process.stdout.write(`BAD ${i}`);
        process.exit(0);
    }
}
process.stdout.write("GOOD");

// const data = require("fs")
//     .readFileSync("dev/stdin")
//     .toString()
//     .trim()
//     .split("\n")
//     .map((x) =>
//         x
//             .trim()
//             .split(" ")
//             .map((x) => +x)
//     );

/* ref: https://www.acmicpc.net/source/17734215 */
// const num = +data[0];
// const parents = new Array(num + 1);
// let stack, nextStack;

// parents[1] = 1;
// for (let i = 1; i < num; i++) {
//     const [x, y] = data[i];
//     adj[x].push(y);
//     adj[y].push(x);
// }

// visited[1] = true;
// nextStack = adj[1].map((x) => [1, x]);
// while (nextStack.length) {
//     stack = nextStack;
//     nextStack = [];

//     while (stack.length) {
//         const [s, f] = stack.pop();
//         if (!visited[f]) {
//             visited[f] = true;
//             nextStack.push(...adj[f].map((x) => [f, x]));
//             ans[f] = s;
//         }
//     }
// }

// process.stdout.write(ans.slice(2).join("\n"));

/*
//[11725] 트리의 부모 찾기 2020.02.01 토 23:00
const line = require("fs").readFileSync("/dev/stdin", "utf8");

let [N, ...data] = line.trim().split("\n");

const n = Number(N);

//부모의 노드값 저장용
const parents = Array(n + 1).fill(0);

parents[1] = 1;

const stack = [];
const stack2 = [];


data.forEach(v => {
  const [one, two] = v
    .trim()
    .split(" ")
    .map(V => Number(V));

  if (parents[one] === 0 && parents[two] === 0) {
    stack.push({ one, two });
  } else if (parents[one] === 0 && parents[two] !== 0) {
    parents[one] = two;
  } else if (parents[two] === 0 && parents[one] !== 0) {
    parents[two] = one;
  }
});

while (stack.length > 0 || stack2.length > 0) {
  while (stack.length > 0) {
    const { one, two } = stack.pop();

    if (parents[one] === 0 && parents[two] === 0) {
      stack2.push({ one, two });
    } else if (parents[one] === 0 && parents[two] !== 0) {
      parents[one] = two;
    } else if (parents[two] === 0 && parents[one] !== 0) {
      parents[two] = one;
    }
  }
  while (stack2.length > 0) {
    const { one, two } = stack2.pop();

    if (parents[one] === 0 && parents[two] === 0) {
      stack.push({ one, two });
    } else if (parents[one] === 0 && parents[two] !== 0) {
      parents[one] = two;
    } else if (parents[two] === 0 && parents[one] !== 0) {
      parents[two] = one;
    }
  }
}

const rst = [];
for (let i = 2; i < parents.length; i++) {
  rst.push(parents[i]);
}

console.log(rst.join("\n"));

*/

// ** exec: node .\test.js < dev/stdin **
// let input = "";
// process.stdin.on('data', function(chunk){
// 	input += chunk;
// });
// process.stdin.on('end', function(){
// 	const input = require('fs').readFileSync('dev/stdin').toString().trim();
//  input = input.trim();
// });

/* process.memoryUsage() */
const { heapTotal, heapUsed, external } = process.memoryUsage();
console.log("=====================================================");
console.log(Math.floor((heapTotal + heapUsed + external) / 1024) + "KB");
console.log(process.memoryUsage());
