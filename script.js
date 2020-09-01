const [x, y] = require("fs")
    .readFileSync("dev/stdin")
    .toString()
    .trim()
    .split(/\s+/)
    .map((x) => +x);

let dist = 0;
let pos = x;
let move = 1;

while (true) {
    const tpos = x + move;
    if ((pos < y && y <= tpos) || (pos > y && y >= tpos)) {
        dist += Math.abs(y - pos);
        break;
    }

    dist += Math.abs(tpos - pos);
    pos = tpos;
    move *= -2;
}
console.log(dist);

// let output = "";
// let i = 0;
// let t = 1;
// while (+data[i]) {
//     const n = +data[i++];
//     let ans = +data[i];
//     if (n >= 2) {
//         ans += data[i + n - 1].reduce((a, c) => a + c);
//     }
//     if (n >= 3) {
//         ans += data.slice(i + 1, i + n - 1).reduce((a, c) => a + c[0] + c[c.length - 1], 0);
//     }

//     output += `Case #${t++}:${ans}\n`;
//     i += n;
// }
// process.stdout.write(output);
