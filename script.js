function solution(input) {
    let output = "";
    const data = input
        .toString()
        .trim()
        .split(/\n+/)
        .map((x) =>
            x
                .trim()
                .split(/\s+/)
                .map((x) => +x)
        );

    // console.log(fx(4, 2, 10, [7, 4, 5, 6]));
    // console.log(fx2(4, 2, 10, [7, 4, 5, 6]));

    for (let n = 1; n <= 5; n++) {
        for (let w = 1; w <= 3; w++) {
            for (let L = 10; L <= 20; L++) {
                const d = new Array(n).fill(1);
                while (d[0] <= 10) {
                    if (fx(n, w, L, d) !== fx2(n, w, L, d)) {
                        console.log(n, w, L, d);
                        console.log(fx(n, w, L, d), fx2(n, w, L, d));
                    } else {
                        // console.log(n, w, L, d);
                    }
                    d[n - 1]++;
                    for (let k = n - 1; k > 0; k--) {
                        if (d[k] > 10) {
                            d[k] = 1;
                            d[k - 1]++;
                        }
                    }
                }
            }
        }
    }

    function fx(n, w, L, d) {
        let time = 0;
        let bridge = new Array(w).fill(0);
        for (let i = 0; i < n; i++) {
            bridge.shift();
            bridge.push(0);
            while (bridge.reduce((a, c) => a + c) + d[i] > L) {
                bridge.shift();
                bridge.push(0);
                time++;
            }
            bridge[w - 1] = d[i];
            time++;
        }
        while (bridge.reduce((a, c) => a + c) !== 0) {
            bridge.shift();
            bridge.push(0);
            time++;
        }

        return time;
    }
    function fx2(n, w, L, d) {
        let [time, idx, weight] = [0, 0, 0];
        for (let i = 0; i < n; i++) {
            if (weight + d[i] <= L) {
                time++;
                weight += d[i];
                if (i - idx >= w) {
                    weight -= d[idx++];
                }
            } else {
                time += w - (i - idx - 1);
                weight -= d[idx++];

                while (weight + d[i] > L) {
                    time++;
                    weight -= d[idx++];
                }
                weight += d[i];
            }
        }
        time += w;
        return time;
    }

    // const [n, w, L] = data[0];
    // const d = data[1];
    // let [time, idx, weight] = [0, 0, 0];
    // for (let i = 0; i < n; i++) {
    //     if (weight + d[i] <= L) {
    //         time++;
    //         weight += d[i];
    //         if (i - idx >= w) {
    //             weight -= d[idx++];
    //         }
    //     } else {
    //         time += w - (i - idx - 1);
    //         weight -= d[idx++];

    //         while (weight + d[i] > L) {
    //             time++;
    //             weight -= d[idx++];
    //         }
    //         weight += d[i];
    //     }
    // }
    // time += w;

    // output += time + "\n";
    return output;
}

let input = null;
let isFinish = false;
try {
    input = require("fs").readFileSync("dev/stdin");
    isFinish = true;
} catch (e) {
    input = "";
    process.stdin.on("data", function (chunk) {
        input += chunk;
    });
    process.stdin.on("end", function () {
        isFinish = true;
    });
}
setInterval(function () {
    if (isFinish) {
        process.stdout.write(solution(input));
        process.exit(0);
    }
});
