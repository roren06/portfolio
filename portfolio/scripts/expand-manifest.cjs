const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");

function w(rel, content) {
  const file = path.join(root, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content.replace(/\r?\n/g, "\n"), "utf8");
  console.log("wrote", rel);
}

const files = require(path.join(root, "portfolio-manifest.json"));
for (const { path: rel, content } of files) w(rel, content);
console.log("done", files.length);
