function getCharOffset(ch) {
    return ch.charCodeAt(0) - "A".charCodeAt(0);
}
function getCharByOffset(ch, offset) {
    return String.fromCharCode(((getCharOffset(ch) + offset + 26) % 26) + "A".charCodeAt(0));
}

function solution(data) {
    let output = "";
    output += data.split("").map(x => getCharByOffset(x, -3)).join("") + "\n";
    return output;
}

setInterval(function () {
    process.stdout.write(solution(
        require("fs").readFileSync("dev/stdin").toString().trim()
    ));
    process.exit(0);
});