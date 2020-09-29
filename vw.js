const fs = require("fs");
const text = fs.readFileSync("_test/style.css").toString();
const newText = text.replace(/([^: ()]+)rem/g, function (match, p1, offset, string) {
    return (p1 / 3.6).toFixed(4) + "vw";
});
fs.writeFileSync("_test/style_vw.css", newText);
