const path = require("path");
console.log(path.sep);
//\

const filepath = path.join("/content", "subfolder", "test.txt");
console.log(filepath);
//\content\subfolder\test.txt

const base = path.basename(filepath);
console.log(base);
//test.txt

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
//C:\Users\vicky\OneDrive\Desktop\NodeJs\content\subfolder\test.txt
