// ==================================================
//  input
// ==================================================

// 숫자 한 개
+require("fs").readFileSync("dev/stdin").toString();

// 단어 한 개
require("fs").readFileSync("dev/stdin").toString().trim();

// 한 줄, 숫자 여러 개
require("fs")
    .readFileSync("dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map((x) => +x);

// 여러 줄, 숫자 한 개
require("fs")
    .readFileSync("dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => +x);

// 여러 줄
require("fs")
    .readFileSync("dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());

// 여러 줄, 띄어쓰기 숫자 여러 개
require("fs")
    .readFileSync("dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) =>
        x
            .trim()
            .split(" ")
            .map((x) => +x)
    );

// 여러 줄, 띄어쓰기
require("fs")
    .readFileSync("dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) =>
        x
            .trim()
            .split(" ")
            .map((x) => x.trim())
    );

// ==================================================
//  fast search prime
// ==================================================
const isVaild = (x) => x < L && !(K % BigInt(x));
if (isVaild(2)) {
    process.stdout.write(`BAD 2`);
} else {
    for (let i = 3; i < L; i += i % 3 === 1 ? 4 : 2) {
        if (isVaild(i)) {
            process.stdout.write(`BAD ${i}`);
            process.exit(0);
        }
    }
    process.stdout.write("GOOD");
}

// ==================================================
//  Sieve of Eratosthenes
// ==================================================
let ast = new Array(L).fill(true);
ast[0] = ast[1] = false;
for (let i = 2; i < ast.length; i++) {
    if (ast[i]) {
        for (let j = i + i; j < ast.length; j += i) {
            if (ast[j]) ast[j] = false;
        }
    }
}
// ast = ast.map((x, i) => (x ? i : 0)).filter((x) => x);

for (let i = 2; i < ast.length; i++) {
    if (ast[i] && !(K % BigInt(i))) {
        process.stdout.write(`BAD ${i}`);
        process.exit(0);
    }
}
process.stdout.write("GOOD");

// ==================================================
//  function
// ==================================================
const f0nd = (x, n) => {
    let [t, digit] = [x, 1];
    while ((t = Math.floor(t * 0.1))) digit++;
    return new Array(n - digit + 1).join("0") + x;
};
const reverse = (x) => {
    let ret = 0;
    while (x) {
        ret *= 10;
        ret += x % 10;
        x = Math.floor(x * 0.1);
    }
    return ret;
};
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
//  process.stdin.on
// ==================================================
let input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    const data = input.toString();
    process.exit(0);
});

// ==================================================
//  process.memoryUsage()
// ==================================================
const { heapTotal, heapUsed, external } = process.memoryUsage();
console.log("=====================================================");
console.log(Math.floor((heapTotal + heapUsed + external) / 1024) + "KB");
console.log(process.memoryUsage());
