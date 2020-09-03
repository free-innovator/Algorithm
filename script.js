function solution(input) {
    const data = input
        .toString()
        .trim()
        .split(/\n+/)
        .map((x) => +x);
    let output = "";

    const num = data[0];
    for (let i = 1; i <= num; i++) {
        const n = data[i];
        output += n * n + "\n";
    }

    return output;
}

let input = null;
let isFinishInput = false;
try {
    input = require("fs").readFileSync("dev/stdin");
    isFinishInput = true;
} catch (e) {
    input = "";
    process.stdin.on("data", function (chunk) {
        input += chunk;
    });
    process.stdin.on("end", function () {
        isFinishInput = true;
    });
}
setInterval(function () {
    if (isFinishInput) {
        process.stdout.write(solution(input));
        process.exit(0);
    }
});
