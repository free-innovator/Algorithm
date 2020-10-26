function FastScanner() { this._initialize.apply(this, arguments); }
FastScanner.prototype._initialize = function () { this._index = 0; }
FastScanner.prototype.readInt = function () {
    let result = 0;
    while (!(input[this._index] & 0x10)) ++this._index;
    while (input[this._index] & 0x10) { result = result * 10 + (input[this._index] & 0x0f); ++this._index; }
    return result;
}

function solution() {
    const scanner = new FastScanner();

    const N = scanner.readInt();
    const check = new Array(N + 1);
    for (let i = 0; i < N; i++) {
        const x = scanner.readInt();
        if (!check[x]) check[x] = true;
        else return x + "\n";
    }
    return "Error!\n";
}

const input = require("fs").readFileSync("dev/stdin");
process.stdout.write(solution(input));
process.exit(0);