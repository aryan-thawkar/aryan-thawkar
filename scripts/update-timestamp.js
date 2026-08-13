const fs = require("fs");
const path = require("path");

const readmePath = path.join(__dirname, "../README.md");

if (!fs.existsSync(readmePath)) {
  console.log("README.md not found.");
  process.exit(0);
}

const timestamp = new Date().toISOString().replace("T", " ").substring(0, 16) + " UTC";

let readme = fs.readFileSync(readmePath, "utf8");

readme = readme.replace(
  /<!--LAST_UPDATED-->(.*)/,
  `<!--LAST_UPDATED--> ${timestamp}`
);

fs.writeFileSync(readmePath, readme);

console.log("README timestamp updated");
