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
        input.toString().trim().split(/\n+/)
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