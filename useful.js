// ==================================================
//  추측
// ==================================================
/*
    BigInt를 직접 ===으로 비교하는 것보다, toString으로 문자열로 변경 후 비교하는 것이 더 빠르다.
*/

// ==================================================
//  input
// ==================================================

// 숫자 한 개
+require("fs").readFileSync("dev/stdin").toString()
const input = +require("fs").readFileSync("dev/stdin").toString();

// 단어 한 개
require("fs").readFileSync("dev/stdin").toString().trim()
const input = require("fs").readFileSync("dev/stdin").toString().trim();

// 한 줄, 숫자 여러 개
require("fs").readFileSync("dev/stdin").toString().trim().split(/\s+/).map((x) => +x)
const input = require("fs").readFileSync("dev/stdin").toString().trim().split(/\s+/).map((x) => +x);

// 개행 구분 없이 일렬로 숫자배열을 만들고 싶을 때
require("fs").readFileSync("dev/stdin").toString().trim().split(/\W+/).map((x) => +x)
const input = require("fs").readFileSync("dev/stdin").toString().trim().split(/\W+/).map((x) => +x);

// 여러 줄, 숫자 한 개
require("fs").readFileSync("dev/stdin").toString().trim().split(/\n+/).map((x) => +x)
const input = require("fs").readFileSync("dev/stdin").toString().trim().split(/\n+/).map((x) => +x);

// 여러 줄
require("fs").readFileSync("dev/stdin").toString().trim().split(/\n+/)
require("fs").readFileSync("dev/stdin").toString().trim().split(/\n+/).map((x) => x.trim())
const input = require("fs").readFileSync("dev/stdin").toString().trim().split(/\n+/);
const input = require("fs").readFileSync("dev/stdin").toString().trim().split(/\n+/).map((x) => x.trim());

// 여러 줄, 띄어쓰기 숫자 여러 개
require("fs").readFileSync("dev/stdin").toString().trim().split(/\n+/).map((x) => x.trim().split(/\s+/).map((x) => +x))
const input = require("fs").readFileSync("dev/stdin").toString().trim().split(/\n+/).map((x) => x.trim().split(/\s+/).map((x) => +x));

// 여러 줄, 띄어쓰기
require("fs").readFileSync("dev/stdin").toString().trim().split(/\n+/).map((x) => x.trim().split(/\s+/).map((x) => x.trim()))
const input = require("fs").readFileSync("dev/stdin").toString().trim().split(/\n+/).map((x) => x.trim().split(/\s+/).map((x) => x.trim()));

// 문자열을 두 개씩 묶고 싶을 경우
require("fs").readFileSync("dev/stdin").toString().trim().match(/.{2}/g)

// ==================================================
//  BigInt Math.floor(log2 n)
// ==================================================
const SQ_MAX = 80;
const sq = [1n];
for (let i = 1; i <= SQ_MAX; i++) {
    sq[i] = sq[i - 1] * 2n;
}
function find(x) {
    let [s, f] = [0, SQ_MAX];
    while (s < f + 1) {
        const mid = Math.floor((s + f) * 0.5);
        if (sq[mid] < x) {
            s = mid + 1;
        } else if (sq[mid] > x) {
            f = mid - 1;
        } else {
            return [mid, true];
        }
    }
    return [f, false];
}

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
//  dijkstra
// ==================================================
function dijkstra(si, di) {
    const dp = new Array(N + 1).fill(INF);
    const visited = new Array(N + 1).fill(false);

    dp[si] = 0;
    for (let i = 1; i <= N; i++) {
        let [k, val] = [-1, INF];
        for (let j = 1; j <= N; j++) {
            if (!visited[j] && dp[j] < val) {
                val = dp[j];
                k = j;
            }
        }

        if (k === -1) break;

        visited[k] = true;
        for (let j = 1; j <= N; j++) {
            const dist = dp[k] + adj[k][j];
            if (dist < dp[j]) dp[j] = dist;
        }
        if (k === di) break;
    }

    return dp[di];
}

function dijkstra(si, di) {
    const dp = new Array(N + 1).fill(INF);
    const route = new Array(N + 1).fill(0);
    const visited = new Array(N + 1).fill(false);

    dp[si] = 0;
    for (let i = 1; i <= N; i++) {
        let [k, val] = [-1, INF];
        for (let j = 1; j <= N; j++) {
            if (!visited[j] && dp[j] < val) {
                val = dp[j];
                k = j;
            }
        }
        if (k === -1) break;

        visited[k] = true;
        for (let j = 1; j <= N; j++) {
            const dist = dp[k] + adj[k][j];
            if (dist < dp[j]) {
                dp[j] = dist;
                route[j] = k;
            }
        }
        if (k === di) break;
    }

    const path = [di];
    let x = di;
    while (route[x]) {
        path.push((x = route[x]));
    }

    return [dp[di], path.reverse()];
}

// ==================================================
//  ccw
// ==================================================
function ccw(x2, y2, x3, y3) {
    return (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1);
}

// ==================================================
//  stack
// ==================================================
const stack = [];
let si = 0;
function isEmpty() { return !stack.length; }
function push(x) { stack[si++] = x; }
function pop() { return isEmpty() ? null : stack[--si]; }

// ==================================================
//  Queue
// ==================================================
const queue = new Array(N + 1);
let [qb, qf] = [0, 0];
function isEmpty() { return qb === qf; }
function front() { return isEmpty() ? null : queue[qf]; }
function pop() { return isEmpty() ? null : dp[qb++]; }
function push(x) { dp[qf++] = x; }

// =========================================================== //
function Queue() { this.initialize.apply(this, arguments); }
Queue.prototype.initialize = function (reserveSize) {
    this._queue = (reserveSize <= 0) ? [] : new Array(reserveSize);
    this._b = 0; // iterator back
    this._f = 0; // iterator front
}
Queue.prototype.empty = function () { return this._b <= this._f; }
Queue.prototype.front = function () { return this.empty() ? null : this._queue[this._f]; }
Queue.prototype.pop = function () { ++this._f; }
Queue.prototype.push = function (x) { this._queue[this._b] = x; ++this._b; }

// ==================================================
//  Trie
// ==================================================
function Trie() { this.initialize.apply(this, arguments); }
Trie.prototype.initialize = function (src, baseCh) {
    this._capacity = 26;
    this._failIndex = this._capacity + 1;
    this._basis = baseCh.charCodeAt(0);
    this._root = null;

    this._init(src);
}
Trie.prototype._alloc = function () { return new Array(this._capacity + 2); }
Trie.prototype._insert = function (str) {
    let here = this._root;
    const len = str.length;
    for (let i = 0; i < len; i++) {
        const offset = str[i].charCodeAt(0) - this._basis;
        if (!here[offset]) here[offset] = this._alloc();
        here = here[offset];
    }
    here[this._capacity] = true;
}
Trie.prototype._init = function (src) {
    const root = this._root = this._alloc();
    const len = src.length;
    for (let i = 0; i < len; i++) this._insert(src[i]);

    // create fail
    const q = new Queue();
    q.push(this._root);

    root[this._failIndex] = root;
    while (!q.empty()) {
        const here = q.front(); q.pop();
        for (let i = 0; i < this._capacity; i++) {
            const next = here[i];
            if (!next) continue;

            if (here === root) {
                next[this._failIndex] = root;
            } else {
                let dest = here[this._failIndex];
                while (dest !== root && !dest[i]) dest = dest[this._failIndex];

                if (dest[i]) dest = dest[i];
                next[this._failIndex] = dest;
            }

            if (next[this._failIndex][this._capacity]) next[this._capacity] = true;
            q.push(next);
        }
    }
}
Trie.prototype.check = function (str) {
    const root = this._root;
    const len = str.length;
    let here = root;
    for (let i = 0; i < len; i++) {
        const offset = str[i].charCodeAt(0) - this._basis;
        while (here !== root && !here[offset]) here = here[this._failIndex];
        if (here[offset]) here = here[offset];
        if (here[this._capacity]) return true;
    }
    return false;
}
// Trie.prototype.__printWordList = function () {
//     const basis = this._basis;
//     const capacity = this._capacity;
//     function fn(str, arr) {
//         for (let i = 0; i < capacity; i++) {
//             if (arr[i]) {
//                 const ch = String.fromCharCode(i + basis);
//                 if (arr[i][capacity]) console.log(str + ch);
//                 fn(str + ch, arr[i]);
//             }
//         }
//     }
//     fn("", this._trie);
// }

// ==================================================
//  function
// ==================================================
function BigSqrt(val, k = 2n) {
    /* https://stackoverflow.com/questions/53683995/javascript-big-integer-square-root */
    let o = 0;
    let x = val;
    let limit = 100;

    while (x ** k != k && x != o && --limit) {
        o = x;
        x = ((k - 1n) * x + val / x ** (k - 1n)) / k;
    }
    return x;
}

function getGCD(a, b) {
    if (a < b) [a, b] = [b, a];
    while (b) [a, b] = [b, a % b];
    return a;
}
function getCharOffset(ch) {
    if ("a" <= ch && ch <= "z") return ch.charCodeAt(0) - "a".charCodeAt(0);
    else if ("A" <= ch && ch <= "Z") return ch.charCodeAt(0) - "A".charCodeAt(0);
    else return null;
}
function getCharDiffOffset(ch1, ch2) {
    return (ch2.charCodeAt(0) - ch1.charCodeAt(0) + 26) % 26;
}
function getCharByOffset(ch, offset) {
    if ("a" <= ch && ch <= "z") {
        return String.fromCharCode(((getCharOffset(ch) + offset + 26) % 26) + "a".charCodeAt(0));
    } else if ("A" <= ch && ch <= "Z") {
        return String.fromCharCode(((getCharOffset(ch) + offset + 26) % 26) + "A".charCodeAt(0));
    } else return null;
}

function f0nd(x, n) {
    let [t, digit] = [x, 1];
    while ((t = Math.floor(t * 0.1))) ++digit;
    return new Array(n - digit + 1).join("0") + x;
}
function getTime(hh, mm, ss) {
    return hh * 3600 + mm * 60 + ss;
}
function formatTime(time) {
    let [h, m, s] = [0, 0, time];
    [m, s] = [Math.floor(s / 60), s % 60];
    [h, m] = [Math.floor(m / 60) % 24, m % 60];
    return `${f0nd(h, 2)}:${f0nd(m, 2)}:${f0nd(s, 2)}`;
}

function parseIntN(str, digit) {
    digit = BigInt(digit);
    let ret = 0n;
    let mul = 1n;
    const len = str.length;
    for (let i = len - 1; i >= 0; i--) {
        ret += BigInt(str[i]) * mul;
        mul *= digit;
    }
    return ret;
}

function Rev(x) {
    let ret = 0;
    while (x) {
        ret = ret * 10 + x % 10;
        x = Math.floor(x * 0.1);
    }
    return ret;
}

function sumCiphers(x) {
    let sumv = 0;
    while (x) {
        sumv += x % 10;
        x = Math.floor(x * 0.1);
    }
    return sumv;
}
function getNumberLength(x) {
    if (x === 0) {
        return 1;
    } else {
        let len = 0;
        while (x) {
            len++;
            x = Math.floor(x * 0.1);
        }
        return len;
    }
}

function isExistNumber(x, n) {
    while (x) {
        if (x % 10 === n) return true;
        x = Math.floor(x * 0.1);
    }
    return false;
}
function isExistNumbers(x, numArr) {
    while (x) {
        if (numArr.indexOf(x % 10) >= 0) return true;
        x = Math.floor(x * 0.1);
    }
    return false;
}
function getCntNumbers(x, numArr) {
    let cnt = 0;
    while (x) {
        if (numArr.indexOf(x % 10) >= 0) cnt++;
        x = Math.floor(x * 0.1);
    }
    return cnt;
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
function copy2DArray(arr) {
    return new Array(arr.length).fill(0).map((_, i) => arr[i].slice());
}

function printArr(arr) {
    let output = "";
    for (let i = 0; i < arr.length; i++) {
        output += arr[i] + " ";
    }
    process.stdout.write(output + "\n");
}

function precisionDivide(a, b) {
    [a, b] = [BigInt(a), BigInt(b)];
    let ret = `${a / b}.`;
    for (let i = 0; i < 6 && a; i++) {
        a = (a % b) * 10n;
        ret += a / b;
    }
    return ret;
}
function precisionCeil(a, b) {
    const div = precisionDivide(a, b).split(".");
    return div[1] === "0" ? BigInt(div[0]) : BigInt(div[0]) + 1n;
}
function precisionFloor(a, b) {
    return precisionDivide(a, b).split(".")[0];
}

function matrixMultiply(N, A, B) {
    const matrix = new Array(N).fill(0).map((x) => new Array(N).fill(0));
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            for (let k = 0; k < N; k++) {
                matrix[i][j] += A[i][k] * B[k][j];
            }
            matrix[i][j] %= 1000;
        }
    }
    return matrix;
}

function combination(maxDepth, range) {
    const combArr = [];
    const visited = [];
    let cai = 0;

    function _combination(now, depth) {
        ++depth;
        if (depth <= maxDepth) {
            for (let i = now + 1; i <= range; ++i) {
                visited[i] = true;
                _combination(i, depth);
                visited[i] = false;
            }
        } else if (depth > maxDepth) {
            const arr = [];
            let ai = 0;
            for (let i = 1; i <= range; ++i) {
                if (visited[i]) arr[ai++] = i;
            }
            combArr[cai++] = arr;
        }
    }
    _combination(0, 0);
    return combArr;
}

function max(arr) {
    const len = arr.length;
    let ret = 0;
    for (let i = 0; i < len; ++i) {
        if (ret < arr[i]) ret = arr[i];
    }
    return ret;
}
function sumFx(arr) {
    const len = arr.length;
    let ret = 0;
    for (let i = 0; i < len; ++i) {
        ret += arr[i];
    }
    return ret;
}


// ==================================================
//  readFileSync
// ==================================================
const input = require("fs").readFileSync("dev/stdin");

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
//  process.stdin.on + readFileSync
// ==================================================
function solution(data) {
    let output = "";
    return output;
}

/* preprocessing */
let input = null;
let isFinish = false;
setInterval(() => {
    if (!isFinish) return;
    process.stdout.write(solution(
        input.toString().trim().split(/\n+/).map((x) => x.trim().split(/\s+/).map((x) => +x))
    ));
    process.exit(0);
});
try {
    input = require("fs").readFileSync(process.platform !== "win32" ? "dev/stdin" : "input.txt");
    isFinish = true;
} catch (e) {
    input = "";
    process.stdin.on("data", function (chunk) { input += chunk });
    process.stdin.on("end", function () { isFinish = true });
}

// =========================================================== //
setInterval(function () {
    process.stdout.write(solution(
        require("fs").readFileSync("dev/stdin")
    ));
    process.exit(0);
});

// =========================================================== //
const input = require("fs").readFileSync("dev/stdin").toString().trim().split(/\n+/).map((x) => x.trim().split(/\s+/).map((x) => +x));
setInterval(() => {
    process.stdout.write(solution(input) || "");
    process.exit(0);
});

// =========================================================== //
const input = require("fs").readFileSync("dev/stdin").toString().trim().split(/\n+/).map((x) => x.trim().split(/\s+/).map((x) => +x));
process.stdout.write(solution(input) || "");
process.exit(0);

// ==================================================
//  process.memoryUsage()
// ==================================================
const { heapTotal, heapUsed, external } = process.memoryUsage();
console.log("=====================================================");
console.log(Math.floor((heapTotal + heapUsed + external) / 1024) + "KB");
console.log(process.memoryUsage());

// ==================================================
//  assert
// ==================================================
const assert = require("assert");
assert.ok();
