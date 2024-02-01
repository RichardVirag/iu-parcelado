const concat = require("concat");
const fs = require("fs");
const someFile = "./dist/micro-fe/index.html";
const scriptReplacedString = '<script src="micro-fe.js" type="module"></script></body>';

(async function build() {
  const files = [
    "./dist/micro-fe/runtime.js",
    "./dist/micro-fe/polyfills.js",
    "./dist/micro-fe/main.js",
  ];
  await concat(files, "./dist/micro-fe/micro-fe.js").then(() => {
    fs.readFile(someFile, "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }
      var arrResult = data.split('\n');
      arrResult[11] = scriptReplacedString;
      data = arrResult.join('\n');
    
      fs.writeFile(someFile, data, "utf8", function (err) {
        if (err) return console.log(err);
      });
    });
  });
})();
