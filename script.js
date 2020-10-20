function solution(data) {
    let output = "";

    let di = 0;
    while (data[di] !== "-1") {
        const [m, name, result] = data[di];

        ++di;
    }

    const [N, M] = data[0].split(" ").map(x => +x);
    if (M >= 1) {
        for (let i = 1; i <= N; i++) {
            output += data[i].split("").reverse().join("") + "\n";
        }
    }

    return output;
}

const input = require("fs").readFileSync("dev/stdin").toString().trim().split(/\n+/);
process.stdout.write(solution(input));
process.exit(0);